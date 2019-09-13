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

  providerUser: any = {};

  constructor(private formBuilder: FormBuilder,	private spinner: NgxSpinnerService,
              private userService: UserService, private districtService: DistrictService,
              private categoryService: CategoryService, private providerService: ProviderService) {
    this.tipoForm = true;
    this.userService.getCurrentUser()
        .subscribe((res: any) => {
          this.providerUser = {...res.data.provider};
          console.log(this.providerUser);
          this.tipo(this.providerUser.type_provider);
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
        this.categories = response.data;
      }, (error: any) => {
        console.log(error);
      });
   }

   ngOnInit() {
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
      contrasena:  ['', Validators.required],
      contrasena2:  ['', Validators.required],
      eBancaria:  [''],
      nCuenta:  [''],
      interbancaria:  ['']/*,
      categories:  [[], Validators.required],
      districts:  [[], Validators.required]*/
    });
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
    this.spinner.show();
    if(option == '0'){
      this.tipoForm = true;
      this.registerForm.setValue({
        nombre: this.providerUser.name,
        apellidos: this.providerUser.lastname,
        pcorreo: this.providerUser.email,
        contrasena: '',
        contrasena2: '',
        ptelefono: this.providerUser.phone,
        foto: this.providerUser.image,
        direccion: this.providerUser.address,
        //this.providerUser.emergency: '1',
        ruc: this.providerUser.ruc,
        experiencia: this.providerUser.experience,
        //this.providerUser.type_provider: params.tipo,
        logo: this.providerUser.logo,
        rSocial: this.providerUser.r_social,
        dfiscal: this.providerUser.a_fiscal,
        dComercial: this.providerUser.a_comercial,
        dTaller: this.providerUser.a_taller,
        sWeb: this.providerUser.url,
        policales: this.providerUser.a_police,
        penales: this.providerUser.a_penal,
        judiciales: this.providerUser.a_judicial,
        eBancaria: this.providerUser.bank_id,
        nCuenta: this.providerUser.bank_c,
        interbancaria: this.providerUser.bank_ci/*,
        categories: JSON.parse( this.providerUser.categories),
        districts: JSON.parse( this.providerUser.districts)*/
        });
    }else if(option == '1'){
      this.tipoForm = false;
      this.removeControls();
      this.registerForm.setValue({
        nombre: this.providerUser.user.name,
        apellidos: this.providerUser.user.lastname,
        pcorreo: this.providerUser.user.email,
        ptelefono: this.providerUser.user.phone,
        foto: this.providerUser.user.image,
        direccion: this.providerUser.user.address,
        dni: '71330830',
        psWeb: 'www.thor.com',
        //this.providerUser.emergency: '1',
        experiencia: this.providerUser.experience.split(" ")[0],
        contrasena: '',
        contrasena2: '',
        tipo: this.providerUser.type_provider,
        policiales: this.providerUser.a_police,
        penales: this.providerUser.a_penal,
        judiciales: this.providerUser.a_judicial,
        eBancaria: this.providerUser.bank_id,
        nCuenta: this.providerUser.bank_c,
        interbancaria: this.providerUser.bank_ci/*,
        categories: JSON.stringify(params.categories),
        districts: JSON.stringify(params.districts)*/
      });
    }
    this.spinner.hide();
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

  onSubmit() {
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
  		this.spinner.hide();
  	}, (error: any) => {
      this.submitted = false;
  		console.log(error);
	  		return;
  	})
  }

}
