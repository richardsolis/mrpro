import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { AppSettings } from 'src/app/app.settings';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  title:string = "";
  clientList: any[];

  registerForm: FormGroup;
  imageFoto:any;
  submitted: boolean = false;
  flagImg: boolean = false;
  flagSize: boolean = false;

  flagCreateUpdate: boolean = false;
  message: string = "";
  flagRes: boolean = false;
  flagPsw: boolean = false;

  urlImageLogo: string = "";

  confirmModel: any = {
    title: "",
    client_id: "",
    status: ""
  };

  @ViewChild(DataTableDirective) dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private formBuilder: FormBuilder, private spinner: NgxSpinnerService, 
              private clientService: ClientService, private userService: UserService) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      password_confirmation:  ['', Validators.required],
      phone:  ['', Validators.required],
      image: [''],
      doc_number:  ['', Validators.required]
    });
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      order: [[0,'desc']],
      language: AppSettings.LANG_SPANISH
    };

    this.getClientList();
  }

  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }

  filterInit(){
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('input').val('');
        $('input', this.footer()).on('keyup change', function () {
          if (that.search() !== this['value']) {
            that
              .search(this['value'])
              .draw();
          }
        });
      });
    });
  }

  rerender(){
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.getClientList();
    });
  }

  getClientList(){
    this.clientList = [];
    this.spinner.show();
    this.clientService.getClients().subscribe(
      response => {
        console.log(response);
        let clients:any = response;
        this.clientList.push(...clients.data);
        this.dtTrigger.next();
        this.filterInit();
        this.spinner.hide();
      },
      error =>{
        console.log(error);
        this.spinner.hide();
    });
  }

  selectFile(event){
    console.log(event.target.name);
  
    if (!event) {
      this.imageFoto  = null;
      return;
    }

    if(event.target.files[0].type.indexOf('image') < 0) {
      this.imageFoto  = null;
      return;
    }

    if (event.target.files[0].size > 2500000) {
      this.flagImg = true;
      this.imageFoto = null;
      return;
    }
    this.flagImg = false;
    this.imageFoto = event.target.files[0];
    this.uploadFile(this.imageFoto, 'image');
  
  }

  uploadFile(file, name: string){
    this.spinner.show();
    this.userService.postSaveImageUser(file)
  	.subscribe((response: any) => {
      this.registerForm.get(name).setValue(response.data);  
  		this.spinner.hide();
  	}, (error: any) => {
  		console.log(error);
	  })
  }

  initOneClient(){
    return {id:'', name: '', 
            lastname: '', email:'', 
            password: '', password_confirmation:  '',
            phone: '', image: '',
            doc_number: ''};
  }

  confirm(cmodal, title: string, providerID: string, status: string){
    this.confirmModel.title = '';
    this.confirmModel.client_id = '';
    this.confirmModel.status = '';
    cmodal.open();
    this.confirmModel.title = title;
    this.confirmModel.client_id = providerID;
    this.confirmModel.status = status;
  }

  setStatus(cmodal){
    this.clientService.postSetStatusClient({ client_id: this.confirmModel.client_id, status: this.confirmModel.status})
          .subscribe((response: any) => {
            console.log('status',response);
            cmodal.close();
            this.rerender();
          }, (error: any) => {
            console.log(error);
          })
  }

  newClient(modal, tempTittle:string, client:any = null) {
    this.flagRes = false;
    console.log("OpenModal Comsion - ", tempTittle);
    this.spinner.show();
    if(client){
      this.urlImageLogo = "";
      this.title = `${tempTittle} ${client.code}`;
      this.flagCreateUpdate = false;
      this.urlImageLogo = client.user.image_url;
      this.registerForm.setValue({id: client.id, name: client.user.name, lastname: client.user.lastname,
                                  email: client.user.email, password: '', password_confirmation:  '',
                                  phone:  client.user.phone, image: client.user.image, doc_number: client.user.doc_number});
      modal.open();
      this.spinner.hide();
    }else{
      this.title = tempTittle;
      this.flagCreateUpdate = true;
      this.registerForm.setValue(this.initOneClient());
      modal.open();
      this.spinner.hide();
    }

  }

  onSubmit(myModal){
    this.flagRes = false;
    console.log(this.registerForm.value);

    if(this.flagCreateUpdate == true && (this.registerForm.get('password').value !== this.registerForm.get('password_confirmation').value)){
      console.log('contraseñas');
      this.flagPsw = true;
      return;
    }

    if (this.flagCreateUpdate == true && this.registerForm.invalid) {
      console.log('invalidos');
      this.submitted = true;
      return;
    }

    this.spinner.show();
    if(this.flagCreateUpdate == true){
      this.clientService.postCreateClient(this.registerForm.value)
        .subscribe((response: any) => {
          console.log('Create',response);
          this.flagPsw = false;
          this.flagRes = true;
          this.message = 'Registro con éxito.';
          myModal.open();
          this.submitted = false;
          this.rerender();
          this.registerForm.setValue(this.initOneClient());
          this.spinner.hide();
        }, (error: any) => {
          this.submitted = false;
          console.log(error);
          this.spinner.hide();
        });
    }else{
      this.clientService.putUpdateClient(this.registerForm.value)
        .subscribe((response: any) => {
          console.log('Update',response);
          this.flagPsw = false;
          this.flagRes = true;
          this.message = 'Actualizado con éxito.';
          this.submitted = false;
          this.rerender();
          this.spinner.hide();
          //myModal.close();
        }, (error: any) => {
          this.submitted = false;
          console.log(error);
          this.spinner.hide();
        });
    }
  }


}
