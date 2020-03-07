import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from '../../../../services/user.service';
import { DistrictService } from 'src/app/services/district.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-profile-provider',
  templateUrl: './profile-provider.component.html',
  styleUrls: ['./profile-provider.component.css']
})
export class ProfileProviderComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  message = '';
  tipoForm:boolean;
  imageLogo:any;
  imageFoto:any;
  pdfpoliciales:any;
  pdfPenales:any;
  pdfJudiciales:any;
  districts: any[];
  categories: any[];
  categories2 = [];
  categories3 = [];
  base64Policiales: string;
  base64Penales: string;
  base64Judiciales: string;

  providerUser: any = {};

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  dropdownList3 = [];
  selectedItems3 = [];
  dropdownSettings3 = {};
  idsCategory = [];
  idsCategory2 = [];
  idsCategory3 = [];
  constructor(private formBuilder: FormBuilder,	private spinner: NgxSpinnerService,
              private userService: UserService, private districtService: DistrictService,
              private categoryService: CategoryService, private providerService: ProviderService) {
    this.tipoForm = true;
    this.spinner.show();
    this.userService.getCurrentUser()
        .subscribe((res: any) => {
          this.providerUser = {...res.data.provider};
          for (let i = 0; i < this.providerUser.categories.length; i++) {
            if (this.providerUser.categories[i].category_service !== null) {
              this.selectedItems.push({"id":i , "valueId":this.providerUser.categories[i].category_service_id ,"itemName":this.providerUser.categories[i].category_service.name})
            }
          }
          for (let i = 0; i < this.providerUser.priceds.length; i++) {
              this.selectedItems3.push({"id":i , "valueId":this.providerUser.priceds[i].service_priced_id ,"itemName":this.providerUser.priceds[i].service_priced.name})
          }
          this.tipo(this.providerUser.type_provider);
          this.spinner.hide();
        }, (error: any) => {
          console.log(error);
        });
    
    this.districtService.guestGetDistricts()
      .subscribe((response: any) => {
        this.districts = response.data;
      }, (error: any) => {
        console.log(error);
      });

    this.categoryService.guestGetCategories()
      .subscribe((response: any) => {
        this.categories = response.data.filter(item => item.parent == 0);
        // this.categoryService.guestGetPrices().subscribe((res: any) => {
        //   this.categories.push(...res.data.filter(item => item.parent == 0));
          console.log(this.categories)
          for (let i = 0; i < this.categories.length; i++) {
            this.dropdownList.push({"id":i,"valueId":this.categories[i].id,"itemName":this.categories[i].name},)
          }
          console.log(this.dropdownList)
      }, (error: any) => {
        console.log(error);
      });

      this.categoryService.guestGetPrices().subscribe((res: any) => {
        console.log(res)
          this.categories2.push(...res.data.filter(item => item.parent == 0));
          console.log(this.categories2)
          for (let i = 0; i < this.categories2.length; i++) {
            this.dropdownList3.push({"id":i,"valueId":this.categories2[i].id,"itemName":this.categories2[i].name},)
          }
      });
   }

   ngOnInit() {
        this.dropdownSettings = { 
              singleSelection: false, 
              text:"Seleccionar Categoria",
              selectAllText:'Seleccionar todo',
              unSelectAllText:'UnSelect All',
              enableSearchFilter: true,
              enableCheckAll:false,
              classes:"myclass custom-class"
            }; 
            
    this.dropdownSettings3 = { 
        singleSelection: false, 
        text:"Seleccionar Categoria",
        selectAllText:'Seleccionar todo',
        unSelectAllText:'UnSelect All',
        enableSearchFilter: true,
        enableCheckAll:false,
        classes:"myclass custom-class"
    };         

    this.registerForm = this.formBuilder.group({
      id: [''],
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
      contrasena:  [''],
      contrasena2:  [''],
      eBancaria:  [''],
      nCuenta:  [''],
      interbancaria:  [''],
      categories:  [[]],
      priced: [[]],
      districts:  [[]]
    });
  }

  onItemSelect(item:any){
    this.tipo(this.providerUser.type_provider)
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item:any){
    this.tipo(this.providerUser.type_provider)
      console.log(item);
      console.log(this.selectedItems);
  }
  onSelectAll(items: any){
    this.tipo(this.providerUser.type_provider)
      console.log(this.providerUser.categories.map(item => item.category_service_id),"asdasd");
  }
  onDeSelectAll(items: any){
    this.tipo(this.providerUser.type_provider)
      console.log(items);
  }


  onItemSelect3(item:any){
    this.tipo(this.providerUser.type_provider)
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect3(item:any){
    this.tipo(this.providerUser.type_provider)
      console.log(item);
      console.log(this.selectedItems);
  }
  onSelectAll3(items: any){
    this.tipo(this.providerUser.type_provider)
      console.log(this.providerUser.categories.map(item => item.category_service_id),"asdasd");
  }
  onDeSelectAll3(items: any){
    this.tipo(this.providerUser.type_provider)
      console.log(items);
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

  tipo(option:string){
    console.log(this.selectedItems)
    this.idsCategory = []
    for (let i = 0; i < this.selectedItems.length; i++) {
      this.idsCategory.push(this.selectedItems[i].valueId)
    }
    this.idsCategory2 = [];
    for (let i = 0; i < this.selectedItems3.length; i++) {
      this.idsCategory2.push(this.selectedItems3[i].valueId)
    }

    if(option == '0'){
      this.tipoForm = true;
      this.registerForm.setValue({
        id: this.providerUser.id,
        tipo: this.providerUser.type_provider,
        ruc: this.providerUser.ruc,
        rSocial: this.providerUser.r_social,
        dfiscal: this.providerUser.a_fiscal,
        dComercial: this.providerUser.a_comercial,
        dTaller: this.providerUser.a_taller,
        telefono: this.providerUser.company_phone,
        logo: this.providerUser.logo,
        sWeb: this.providerUser.url,
        correo: this.providerUser.company_email,
        dni: this.providerUser.user.doc_number,
        nombre: this.providerUser.user.name,
        apellidos: this.providerUser.user.lastname,
        ptelefono: this.providerUser.user.phone,
        foto: this.providerUser.user.image,
        direccion: this.providerUser.user.address,
        psWeb: this.providerUser.user.website,
        pcorreo: this.providerUser.user.email,
        policiales: this.providerUser.a_police,
        penales: this.providerUser.a_penal,
        judiciales: this.providerUser.a_judicial,
        experiencia: (this.providerUser.experience)? this.providerUser.experience.split(" ")[0] : "",
        districts: this.providerUser.districts.map(item => item.district_id),
        categories: this.idsCategory,
        priced : this.idsCategory2,
        contrasena: '',
        contrasena2: '',
        eBancaria: this.providerUser.bank_id,
        nCuenta: this.providerUser.bank_c,
        interbancaria: this.providerUser.bank_ci
        });
    }else if(option == '1'){
      this.tipoForm = false;
      this.removeControls();
      this.registerForm.setValue({
        id: this.providerUser.id,
        tipo: this.providerUser.type_provider,
        dni: this.providerUser.user.doc_number,
        nombre: this.providerUser.user.name,
        apellidos: this.providerUser.user.lastname,
        ptelefono: this.providerUser.user.phone,
        foto: this.providerUser.user.image,
        direccion: this.providerUser.user.address,
        psWeb: this.providerUser.user.website,
        pcorreo: this.providerUser.user.email,
        policiales: this.providerUser.a_police,
        penales: this.providerUser.a_penal,
        judiciales: this.providerUser.a_judicial,
        experiencia: (this.providerUser.experience)? this.providerUser.experience.split(" ")[0] : "",
        districts: this.providerUser.districts.map(item => item.district_id),
        categories: this.idsCategory,
        priced : this.idsCategory2,
        contrasena: '',
        contrasena2: '',
        eBancaria: this.providerUser.bank_id,
        nCuenta: this.providerUser.bank_c,
        interbancaria: this.providerUser.bank_ci
      });
      console.log(this.registerForm)
    }

    if(this.providerUser.a_police && this.providerUser.a_police != 'null'){
      this.userService.convertImage(this.providerUser.a_police)
      .subscribe((res: any)=>{
        this.base64Policiales = res.data;
      }, (error: any) => {
        console.log(error);
      });
    }

    if(this.providerUser.a_penal && this.providerUser.a_penal != 'null'){
      this.userService.convertImage(this.providerUser.a_penal)
      .subscribe((res: any)=>{
        this.base64Penales = res.data;
      }, (error: any) => {
        console.log(error);
      });
    }

    if(this.providerUser.a_judicial && this.providerUser.a_judicial != 'null'){
      this.userService.convertImage(this.providerUser.a_judicial)
      .subscribe((res: any)=>{
        this.base64Judiciales = res.data;
      }, (error: any) => {
        console.log(error);
      });
    }
    
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
      this.imageLogo = event.target.files[0];
      this.uploadFile(this.imageLogo, 'logo');
    }else if(event.target.name === 'foto'){
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

  public onSubmit(ResultModal) {
    this.message = '';
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this.submitted = true;
        return;
    }
    console.log('SUCCESS!! :-)',this.registerForm.value);
 
    this.spinner.show();
  	this.providerService.postUpdateProviders(this.registerForm.value)
  	.subscribe((response: any) => {
      console.log(response);
      ResultModal.open();
      this.message = "Perfil proveedor actualizado con éxito.";
      this.submitted = false;
  		this.spinner.hide();
  	}, (error: any) => {
      ResultModal.open();
      this.message = "Ocurrió un error en el proceso, intentelo nuevamente.";
      this.submitted = false;
      this.spinner.hide();
  		console.log(error);
	  		return;
  	})
  }

}
