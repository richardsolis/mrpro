import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { ProviderService } from '../../../services/provider.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { AppSettings } from '../../../app.settings';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DistrictService } from '../../../services/district.service';
import { CategoryService } from '../../../services/category.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

  title:string = "";
  providerList: any[];

  registerForm: FormGroup;
  submitted = false;
  tipoForm:boolean;
  imageLogo:any;
  imageFoto:any;
  pdfpoliciales:any;
  pdfPenales:any;
  pdfJudiciales:any;
  districts: any[];
  categories: any[];
  flagSize: boolean = false;
  flagImg: boolean = false;
  flagPsw: boolean = false;

  @ViewChild(DataTableDirective) dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  
  constructor(private formBuilder: FormBuilder, private spinner: NgxSpinnerService, private providerService: ProviderService,
              private districtService: DistrictService, private categoryService: CategoryService, private userService: UserService) { 
    this.districtService.guestGetDistricts()
      .subscribe((response: any) => {
        this.districts = response.data;
      }, (error: any) => {
        console.log(error);
      });

    this.categoryService.guestGetCategories()
      .subscribe((response: any) => {
        this.categories = response.data;
      }, (error: any) => {
        console.log(error);
      });
  }

  ngOnInit() {
    this.tipoForm = true;

    this.registerForm = this.formBuilder.group({
      tipo: ['0', Validators.required],
      ruc: ['', Validators.required],
      rSocial: ['', Validators.required],
      dfiscal:  ['', Validators.required],
      dComercial:  [''],
      dTaller:  [''],
      telefono:  ['', Validators.required],
      logo:  [''],
      sWeb:  [''],
      correo:  ['', Validators.required],
      dni:  ['', Validators.required],
      nombre:  ['', Validators.required],
      apellidos:  ['', Validators.required],
      ptelefono:  ['', Validators.required],
      direccion:  ['', Validators.required],
      foto:  [''],
      psWeb:  [''],
      pcorreo:  ['', Validators.required],
      policiales:  [''],
      penales:  [''],
      judiciales:  [''],
      experiencia:  [''],
      contrasena:  ['', [Validators.required, Validators.minLength(8)]],
      contrasena2:  ['', [Validators.required, Validators.minLength(8)]],
      eBancaria:  ['',Validators.required],
      nCuenta:  [''],
      interbancaria:  [''],
      categories:  [[], Validators.required],
      districts:  [[]],
    });
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      order: [[1,'desc']],
      language: AppSettings.LANG_SPANISH
    };
    this.getProviderList();
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

  tipo(option:string){
    if(option === 'Empresa' && this.tipoForm === false){
      this.tipoForm = true;
      this.registerForm.get('tipo').setValue('0');
      this.addControls();
    }else if(option === 'Particular'){
      this.tipoForm = false;
      this.registerForm.get('tipo').setValue('1');
      this.removeControls();
    }
  }

  addControls(){
    this.registerForm.addControl('ruc', new FormControl('', Validators.required));
    this.registerForm.addControl('rSocial', new FormControl('', Validators.required));
    this.registerForm.addControl('dfiscal', new FormControl('', Validators.required));
    this.registerForm.addControl('dComercial', new FormControl(''));
    this.registerForm.addControl('dTaller', new FormControl(''));
    this.registerForm.addControl('telefono', new FormControl('', Validators.required));
    this.registerForm.addControl('logo', new FormControl(''));
    this.registerForm.addControl('sWeb', new FormControl(''));
    this.registerForm.addControl('correo', new FormControl('', Validators.required));
  }

  removeControls(){
    this.registerForm.removeControl('ruc');
    this.registerForm.removeControl('rSocial');
    this.registerForm.removeControl('dfiscal');
    this.registerForm.removeControl('dComercial');
    this.registerForm.removeControl('dTaller');
    this.registerForm.removeControl('telefono');
    this.registerForm.removeControl('logo');
    this.registerForm.removeControl('sWeb');
    this.registerForm.removeControl('correo');
  }

  selectFile(event){
    console.log(event.target.name);
  
    if (!event) {
      this.imageFoto  = null;
      this.imageLogo = null;
      return;
    }

    if(event.target.files[0].type.indexOf('image') < 0) {
      this.imageFoto  = null;
      this.imageLogo = null;
      return;
    }

    //this.images.push(event.target.files[0]);
    if(event.target.name === 'logo'){
      if (event.target.files[0].size > 2500000) {
        this.flagSize = true;
        this.imageLogo = null;
        return;
      }
      this.flagSize = false;
      this.imageLogo = event.target.files[0];
      this.uploadFile(this.imageLogo, 'logo');
    }else if(event.target.name === 'foto'){
      if (event.target.files[0].size > 2500000) {
        this.flagImg = true;
        this.imageLogo = null;
        return;
      }
      this.flagImg = false;
      this.imageFoto = event.target.files[0];
      this.uploadFile(this.imageFoto, 'foto');
    }
     
  }

  selectDoc(event){
    console.log(event.target.name);

    if (!event) {
      this.imageFoto  = null;
      this.imageLogo = null;
      return;
    }

    if(event.target.files[0].type.indexOf('pdf') < 0) {
      this.imageFoto  = null;
      this.imageLogo = null;
      return;
    }

    //this.images.push(event.target.files[0]);
    if(event.target.name === 'policiales'){
      this.pdfpoliciales = event.target.files[0];
      this.uploadFile(this.pdfpoliciales, 'policiales');
    }else if(event.target.name === 'penales'){
      this.pdfPenales = event.target.files[0];
      this.uploadFile(this.pdfPenales, 'penales');
    }else if(event.target.name === 'judiciales'){
      this.pdfJudiciales = event.target.files[0];
      this.uploadFile(this.pdfJudiciales, 'judiciales');
    }
     
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

  onlydigit(e) {
    var tecla;
    var patron;
    var tecla_final;
    tecla = document.all ? e.keyCode : e.which;
    if (tecla == 8) {
      return true;
    }
    patron = /[0-9.]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
  }

  rerender(){
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.getProviderList();
    });
  }

  getProviderList(){
    this.providerList = [];
    this.spinner.show();
    this.providerService.getProviders().subscribe(
      response => {
        console.log(response);
        let providers:any = response;
        this.providerList.push(...providers.data);
        this.dtTrigger.next();
        this.filterInit();
        this.spinner.hide();
      },
      error =>{
        console.log(error);
        this.spinner.hide();
      } 
    );
  }

  newProvider(modal, tempTittle:string) {
    console.log("OpenModal Usuario - ", tempTittle);
    this.title = tempTittle;
    this.spinner.show();
    modal.open();
    this.spinner.hide();
  }

  onSubmit(myModal) {

    if(this.registerForm.get('contrasena').value !== this.registerForm.get('contrasena2').value){
      console.log('contraseñas');
      this.flagPsw = true;
      return;
    }
    
    if (this.registerForm.invalid) {
        console.log('invalidos');
        this.submitted = true;
        return;
    }
    console.log(this.registerForm.value);
    /*this.spinner.show();
  	this.userService.createProvider(this.registerForm.value)
  	.subscribe((response: any) => {
      this.flagPsw = false;
      //this.flagRes = true;
      //this.message = 'Registro con éxito, inicie sesión.';
	  	myModal.open();
      this.submitted = false;
  		this.spinner.hide();
  	}, (error: any) => {
      this.flagPsw = false;
      this.submitted = false;
      this.spinner.hide();
      if (error.error && error.error.data && error.error.data.doc_number) {
        //this.flagRes = false;
        //this.message = "El DNI ya esta registrado.";
        myModal.open();
        this.spinner.hide();
        return;
      }
  	})*/
  }

}
