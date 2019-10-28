import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from '../../../services/user.service';
import { ClientService } from '../../../services/client.service';
import { AppSettings } from '../../../app.settings';
import { AdministratorService } from '../../../services/administrator.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  title:string = "";
  adminList: any[];

  registerForm: FormGroup;
  submitted: boolean = false;

  flagCreateUpdate: boolean = false;
  message: string = "";
  flagPsw: boolean = false;

  @ViewChild(DataTableDirective) dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private formBuilder: FormBuilder, private spinner: NgxSpinnerService, 
              private adminService: AdministratorService, private userService: UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      password_confirmation:  ['', Validators.required],
      phone:  ['', Validators.required],
      doc_number:  ['', Validators.required]
    });
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      order: [[0,'desc']],
      language: AppSettings.LANG_SPANISH
    };

    this.getadminList();
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
      this.getadminList();
    });
  }

  getadminList(){
    this.adminList = [];
    this.spinner.show();
    this.adminService.getAdmins().subscribe(
      response => {
        console.log(response);
        let admins:any = response;
        this.adminList.push(...admins.data);
        this.dtTrigger.next();
        this.filterInit();
        this.spinner.hide();
      },
      error =>{
        console.log(error);
        this.spinner.hide();
    });
  }

  initOneAdmin(){
    return {id:'', name: '', lastname: '', email:'', 
            password: '', password_confirmation:  '',
            phone: '', doc_number: ''};
  }

  newAdmin(modal, tempTittle:string, admin:any = null) {
    console.log("OpenModal Comsion - ", tempTittle);
    this.spinner.show();
    if(admin){
      this.title = `${tempTittle} ${admin.id}`;
      this.flagCreateUpdate = false;
      this.registerForm.setValue({id: admin.id, name: admin.name, lastname: admin.lastname,
                                  email: admin.email, password: '', password_confirmation:  '',
                                  phone:  admin.phone, doc_number: admin.doc_number});
      modal.open();
      this.spinner.hide();
    }else{
      this.title = tempTittle;
      this.flagCreateUpdate = true;
      this.registerForm.setValue(this.initOneAdmin());
      modal.open();
      this.spinner.hide();
    }

  }

  onSubmit(myModal, ResultModal){
    this.flagPsw = false;

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
      this.adminService.postCreateAdmin(this.registerForm.value)
        .subscribe((response: any) => {
          console.log('Create',response);
          this.flagPsw = false;
          this.message = 'Registro con éxito.';
          myModal.open();
          this.submitted = false;
          this.rerender();
          this.spinner.hide();
          this.registerForm.setValue(this.initOneAdmin());
          myModal.close();
          ResultModal.open();
        }, (error: any) => {
          this.submitted = false;
          console.log(error);
          this.spinner.hide();
          myModal.close();
          this.message = 'Verificar que el DNI o correo no este en uso.';
          ResultModal.open();
        });
    }else{
      this.adminService.putUpdateAdmin(this.registerForm.value)
        .subscribe((response: any) => {
          console.log('Update',response);
          this.rerender();
          this.flagPsw = false;
          this.message = 'Actualizado con éxito.';
          this.submitted = false;
          this.spinner.hide();
          myModal.close();
          ResultModal.open();
        }, (error: any) => {
          this.submitted = false;
          console.log(error);
          this.spinner.hide();
          myModal.close();
          this.message = 'Verificar que el DNI o correo no este en uso.';
          ResultModal.open();
        });
    }
  }

}
