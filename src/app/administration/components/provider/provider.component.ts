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
import { ServiceService } from '../../../services/service.service';
import * as XLSX from 'xlsx';
import { error } from 'util';

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
  flagTipo: boolean = true;
  flagCreateUpdate: boolean = false;
  message: string = "";
  flagRes: boolean = false;

  base64Policiales: string;
  base64Penales: string;
  base64Judiciales: string;

  urlImageLogo: string = "";
  rowtextalert= false;
  providerImporList: any[] = [];
  flagImport: boolean = false;
  messageImport: string = "";
  popUpCertificate = false;
  certificatesAll = [];
  editC = false;
  idCerti:number;

  @ViewChild(DataTableDirective) dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  confirmModel: any = {
    title: "",
    provider_id: "",
    status: ""
  };
  
  campania = "";
  nombre = "";
  createCertiBtn = false;
  constructor(public ServiceService: ServiceService,private formBuilder: FormBuilder, private spinner: NgxSpinnerService, private providerService: ProviderService,
              private districtService: DistrictService, private categoryService: CategoryService, private userService: UserService) { 
    this.districtService.guestGetDistricts()
      .subscribe((response: any) => {
        this.districts = response.data;
      }, (error: any) => {
        console.log(error);
      });

    this.categoryService.guestGetCategories()
      .subscribe((response: any) => {
        this.categories = response.data.filter(item => item.parent == 0);
        this.categoryService.guestGetPrices().subscribe((res: any) => {
          this.categories.push(...res.data.filter(item => item.parent == 0));
        });
      }, (error: any) => {
        console.log(error);
      });
  }

  closePopUp(){
    this.popUpCertificate = false;
  }

  certificadoPopUp(){
    this.popUpCertificate = true;
    this.ServiceService.getAllCertificate().subscribe((response:any) => {
      this.certificatesAll = response.data
      console.log(this.certificatesAll,"hola")
    })
  }

  editCerti(certi){
    this.campania = certi.company;
    this.nombre = certi.name; 
    this.idCerti = certi.id;
    this.editC = true;
  }

  cancelCerti(){
    this.editC = false;
  }
  
  setCerti(){
    this.ServiceService.changeCerti({company: this.campania,name: this.nombre, id: this.idCerti}).subscribe(response => {
      this.ServiceService.getAllCertificate().subscribe((response:any) => {
        this.certificatesAll = response.data
        this.editC = false;
      })
    })
  }

  createCerti(){
    this.createCertiBtn = true;
    this.editC = true;
    this.campania = "";
    this.nombre = ""; 
    // this.idCerti = certi.id;
  }

  CreateSetCerti(){
    this.ServiceService.sendCerti({company: this.campania,name: this.nombre}).subscribe(response => {
      this.ServiceService.getAllCertificate().subscribe((response:any) => {
        this.certificatesAll = response.data
        this.editC = false;
      })
    })
  }

  deleteCerti(id){
    this.ServiceService.DeleteCerti(id).subscribe(response => {
      console.log(response)
      this.ServiceService.getAllCertificate().subscribe((response:any) => {
        this.certificatesAll = response.data
      })
    }, error => {
      this.rowtextalert = true;
      setTimeout( ()=>{
        this.rowtextalert = false;
      },5000);
    })
    
  }

  ngOnInit() {
    this.tipoForm = true;

    this.registerForm = this.formBuilder.group({
      id: [''],
      status: ['1', Validators.required],
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
      order: [[0,'desc']],
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

  createObjProvider(params: any){
    return {
        doc_number: params.DNI,
        name: params.Nombre,
        lastname: params.Apellidos,
        email: (params.CorreoElectronicoEmpresa == undefined)? params.CorreoElectronico : params.CorreoElectronicoEmpresa,
        password: '12345678',
        password_confirmation: '12345678',
        phone: params.Celular,
        address: params.Direccion,
        ruc: (params.RUC == undefined)? '' : params.RUC,
        type_provider: params.TipoProv,
        r_social: (params.RazonSocial == undefined)? '' : params.RazonSocial,
        a_fiscal: (params.DireccionFiscal == undefined)? '' : params.DireccionFiscal,
        bank_id: this.getIdBank(params.Banco),
        categories: JSON.stringify([]),
        districts: JSON.stringify([]),
        company_phone: (params.CelularEmpresa == undefined)? '' : params.CelularEmpresa,
        company_email: (params.CorreoElectronicoEmpresa == undefined)? '' : params.CorreoElectronicoEmpresa,
        status: '0'
    };
  }

  showImport(importModal){
    this.flagImport = false;
    importModal.open();
  }

  getIdBank(bankID: string){
    let banco='';
    switch (bankID) {
      case 'BCP':
        banco = '1';
        break;
      case 'Interbank':
          banco = '2';
        break;
      case 'BBVA':
          banco = '3';
        break;
      case 'Scotiabank':
          banco = '4';
        break;
    }
    return banco;
  }

  validateProviderExcel(obj: any, tipo){
    if(tipo == 0){
      if ( (obj.DNI != '' && obj.DNI != undefined)  && (obj.Nombre != '' && obj.Nombre != undefined) && 
               (obj.Apellidos != '' && obj.Apellidos != undefined) && (obj.Celular != '' && obj.Celular != undefined) && 
               (obj.Direccion != '' && obj.Direccion != undefined) && (obj.CorreoElectronico != '' && obj.CorreoElectronico != undefined) &&
               (obj.Banco != '' && obj.Banco != undefined) && (obj.RUC != '' && obj.RUC != undefined) &&
               (obj.RazonSocial != '' && obj.RazonSocial != undefined) && (obj.DireccionFiscal != '' && obj.DireccionFiscal != undefined) &&
               (obj.CelularEmpresa != '' && obj.CelularEmpresa != undefined) && (obj.CorreoElectronicoEmpresa != '' && obj.CorreoElectronicoEmpresa != undefined)){
                 return true;
               }else{
                 return false;
               }
    }else if(tipo == 1){
      if((obj.TipoProv != '' && obj.TipoProv != undefined) && (obj.DNI != '' && obj.DNI != undefined) && 
              (obj.Nombre != '' && obj.Nombre != undefined) && (obj.Apellidos != '' && obj.Apellidos != undefined) && 
              (obj.Celular != '' && obj.Celular != undefined) && (obj.Direccion != '' && obj.Direccion != undefined) &&
              (obj.CorreoElectronico != '' && obj.CorreoElectronico != undefined) && (obj.Banco != '' && obj.Banco != undefined)){
                return true;
              }else{
                return false;
              }
    }
  }

  selectExcel(event){
    let excelJsonEmpresa: any[] = [];
    let excelJsonIndividual: any[] = [];
    var reader = new FileReader();
    reader.readAsBinaryString(event.target.files[0]);
    reader.onload = ()=> {
      let fileData = reader.result;
      var workbook = XLSX.read(fileData, {type: 'binary'});
      workbook.SheetNames.forEach((sheetName)=>{
        if(sheetName == 'Empresa'){
          let rowObjectE = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
          for (let index = 0; index < rowObjectE.length; index++) {
            if(this.validateProviderExcel(rowObjectE[index], 0)){
              excelJsonEmpresa.push(this.createObjProvider(rowObjectE[index]));
            }
          }
        }

        if(sheetName == 'Individual'){
          let rowObjectI = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
          for (let index = 0; index < rowObjectI.length; index++) {
            if(this.validateProviderExcel(rowObjectI[index], 1)){
              excelJsonIndividual.push(this.createObjProvider(rowObjectI[index]));
            }
          }
        }
      });
      this.providerImporList.push(...excelJsonEmpresa);
      this.providerImporList.push(...excelJsonIndividual);
      console.log(this.providerImporList);
    };
    
  }

  ImportMassive(){
    this.flagImport = false;
    if(this.providerImporList.length == 0){
      return;
    }
    this.spinner.show();
    this.providerService.postSaveMassiveProvider({data: JSON.stringify(this.providerImporList)})
        .subscribe((response: any) => {
          console.log('Registro Masivo',response);
          let counter = response.data.length;
          this.spinner.hide();
          this.rerender();
          this.flagImport = true;
          this.messageImport = `Se registraron ${counter} proveedores exitosamente.`;
        }, (error: any) => {
          console.log(error);
          this.spinner.hide();
          this.flagImport = true;
          this.messageImport = "Ocurrio un error, verifique que los correos y DNI's no se encuentren registrados en el sistema.";
        })
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
    });
  }

  getExcelProvider(){
    this.spinner.show();
    this.providerService.getExportExcelProviders().subscribe(
      (response: any) => {
        let blob = new Blob([response], { type:  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;'});
        let url = window.URL.createObjectURL(blob);
        console.log(url);
        let pwa = window.open(url);
        this.spinner.hide();
      },
      error =>{
        console.log(error);
        this.spinner.hide();
    });
  }

  newProvider(modal, tempTittle:string, provider:any = null) {
    this.flagRes = false;
    if(provider){
      this.urlImageLogo = "";
      this.flagTipo = true;
      this.flagCreateUpdate = false;
      this.spinner.show();
      this.tipoForm = (provider.type_provider == 1)? false : true; 
      console.log("EditModal Usuario - ", provider);
      this.urlImageLogo = provider.logo_url;
      this.convertImgs(provider.a_police, provider.a_penal, provider.a_judicial);
      //this.registerForm.setValue({score: '0',comment:'',user_provider_id:''});
      this.registerForm.setValue(this.initOneProvider(provider));
      this.title = tempTittle;
      this.spinner.hide();
      modal.open();
      
    }else{
      this.flagCreateUpdate = true;
      console.log(this.registerForm.get('ruc'));
      if(!this.registerForm.get('ruc')){
        this.tipoForm = true;
        this.addControls();
      }
      this.registerForm.setValue(this.initOneProvider(null));
      console.log("CreateModal Usuario - ", tempTittle);
      this.flagTipo = false;
      this.title = tempTittle;
      this.spinner.show();
      modal.open();
      this.spinner.hide();
    }
  }

  convertImgs(a_police:string, a_penal:string, a_judicial:string){
    this.base64Penales = "";
    this.base64Policiales = "";
    this.base64Judiciales = "";

    if(a_police){
      this.userService.convertImage(a_police)
      .subscribe((res: any)=>{
        this.base64Policiales = res.data;
      }, (error: any) => {
        console.log(error);
      });
    }

    if(a_penal){
      this.userService.convertImage(a_penal)
      .subscribe((res: any)=>{
        this.base64Penales = res.data;
      }, (error: any) => {
        console.log(error);
      });
    }

    if(a_judicial){
      this.userService.convertImage(a_judicial)
      .subscribe((res: any)=>{
        this.base64Judiciales = res.data;
      }, (error: any) => {
        console.log(error);
      });
    }
  }

  initOneProvider(provider:any){
    console.log(provider,'hola')
    let temp:any = {};
    
    if(!provider){
      temp = {
        id: '',
        status: '1',
        tipo: '0',
        ruc: '',
        rSocial: '',
        dfiscal: '',
        dComercial: '',
        dTaller: '',
        telefono: '',
        logo: '',
        sWeb: '',
        correo: '',
        dni: '',
        nombre: '',
        apellidos: '',
        ptelefono: '',
        foto: '',
        direccion: '',
        psWeb: '',
        pcorreo: '',
        policiales: '',
        penales: '',
        judiciales: '',
        experiencia: '',
        districts: [],
        categories: [],
        contrasena: '',
        contrasena2: '',
        eBancaria: '',
        nCuenta: '',
        interbancaria: ''
      }
      return temp;
    }

    if(provider.type_provider == 0){
      if(!this.registerForm.get('ruc')){
        this.addControls();
      }
      this.tipoForm = true;
      temp = {
        id: provider.id,
        status: provider.status,
        tipo: provider.type_provider,
        ruc: provider.ruc,
        rSocial: provider.r_social,
        dfiscal: provider.a_fiscal,
        dComercial: provider.a_comercial,
        dTaller: provider.a_taller,
        telefono: provider.company_phone,
        logo: provider.logo,
        sWeb: provider.url,
        correo: provider.company_email,
        dni: provider.user.doc_number,
        nombre: provider.user.name,
        apellidos: provider.user.lastname,
        ptelefono: provider.user.phone,
        foto: provider.user.image,
        direccion: provider.user.address,
        psWeb: provider.user.website,
        pcorreo: provider.user.email,
        policiales: provider.a_police,
        penales: provider.a_penal,
        judiciales: provider.a_judicial,
        experiencia: (provider.experience)? provider.experience.split(" ")[0] : "",
        districts: provider.districts.map(item => item.district_id),
        categories: provider.categories.map(item => item.category_service_id),
        contrasena: '',
        contrasena2: '',
        eBancaria:(provider.bank_id == null)? '' : provider.bank_id,
        nCuenta: (provider.bank_c == null)? '' : provider.bank_c,
        interbancaria: (provider.bank_ci == null)? '' : provider.bank_ci,
      }
    }else{
      this.tipoForm = false;
      this.removeControls();
      temp = {
        id: provider.id,
        status: provider.status,
        tipo: provider.type_provider,
        dni: provider.user.doc_number,
        nombre: provider.user.name,
        apellidos: provider.user.lastname,
        ptelefono: provider.user.phone,
        foto: provider.user.image,
        direccion: provider.user.address,
        psWeb: provider.user.website,
        pcorreo: provider.user.email,
        policiales: provider.a_police,
        penales: provider.a_penal,
        judiciales: provider.a_judicial,
        experiencia: (provider.experience)? provider.experience.split(" ")[0] : "",
        districts: provider.districts.map(item => item.district_id),
        categories: provider.categories.map(item => item.category_service_id),
        contrasena: '',
        contrasena2: '',
        eBancaria: (provider.bank_id == null)? '' : provider.bank_id,
        nCuenta: (provider.bank_c == null)? '' : provider.bank_c,
        interbancaria: (provider.bank_ci == null)? '' : provider.bank_ci,
      };
    }
    return temp;
  }

  confirm(cmodal, title: string, providerID: string, status: string){
    this.confirmModel.title = '';
    this.confirmModel.provider_id = '';
    this.confirmModel.status = '';
    cmodal.open();
    this.confirmModel.title = title;
    this.confirmModel.provider_id = providerID;
    this.confirmModel.status = status;
  }

  setStatus(cmodal){
    this.providerService.postSetStatusProvider({ provider_id: this.confirmModel.provider_id, status: this.confirmModel.status})
          .subscribe((response: any) => {
            console.log('status',response);
            cmodal.close();
            this.rerender();
          }, (error: any) => {
            console.log(error);
          })
  }

  onSubmit(myModal) {
    this.flagRes = false;
    if(this.registerForm.get('contrasena').value !== this.registerForm.get('contrasena2').value){
      console.log('contraseñas');
      this.flagPsw = true;
      return;
    }
    
    if (this.flagCreateUpdate == true && this.registerForm.invalid) {
        console.log('invalidos');
        this.submitted = true;
        return;
    }
    console.log(this.registerForm.value);
    this.spinner.show();
    if(this.flagCreateUpdate == true){
      this.providerService.postCreateProvider(this.registerForm.value)
        .subscribe((response: any) => {
          this.flagPsw = false;
          this.flagRes = true;
          console.log('Create',response);
          this.message = 'Registro con éxito.';
          this.registerForm.setValue(this.initOneProvider(null));
          myModal.close();
          this.submitted = false;
          this.spinner.hide();
          this.rerender();
        }, (error: any) => {
          this.flagPsw = false;
          this.submitted = false;
          console.log(error);
          this.spinner.hide();
          if (error.error && error.error.data) {
            if(error.error.data.doc_number){
              this.message = "El DNI ya esta registrado.";
            }
            if(error.error.data.email){
              this.message = this.message + " El email ya esta registrado.";
            }
            this.flagRes = true;
            myModal.close();
            this.spinner.hide();
            return;
          }
        })
    }else{
      console.log(this.registerForm.value);
      this.providerService.putUpdateProvider(this.registerForm.value)
        .subscribe((response: any) => {
          this.flagPsw = false;
          this.flagPsw = false;
          this.flagRes = true;
          console.log('Update',response);
          this.message = 'Actualizado con éxito.';
          this.submitted = false;
          this.spinner.hide();
          this.rerender();
          //myModal.close();
        }, (error: any) => {
          this.flagPsw = false;
          this.submitted = false;
          console.log(error);
          this.spinner.hide();
          if (error.error && error.error.data) {
            if(error.error.data.doc_number){
              this.message = "El DNI ya esta registrado.";
            }
            if(error.error.data.email){
              this.message = this.message + " El email ya esta registrado.";
            }
            this.flagRes = true;
            myModal.open();
            this.spinner.hide();
            return;
          }
      })
    }
  	
  }

}
