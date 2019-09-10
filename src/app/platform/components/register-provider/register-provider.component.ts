import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-register-provider',
  templateUrl: './register-provider.component.html',
  styleUrls: ['./register-provider.component.css']
})
export class RegisterProviderComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  tipoForm:boolean;
  imageLogo:any;
  imageFoto:any;
  pdfpoliciales:any;
  pdfPenales:any;
  pdfJudiciales:any;



  constructor(private formBuilder: FormBuilder, private router: Router,	
              private spinner: NgxSpinnerService,private userService: UserService) {
    this.tipoForm = true;
    //this.images = [];
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
      contrasena:  ['', Validators.required],
      contrasena2:  ['', Validators.required],
      eBancaria:  [''],
      nCuenta:  [''],
      interbancaria:  ['']
  });
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

  tipo(option:string){
    //console.log("Antes",this.registerForm.value);
    if(option === 'Empresa' && this.tipoForm === false){
      this.tipoForm = true;
      this.registerForm.get('tipo').setValue('0');
      this.addControls();
    }else if(option === 'Particular'){
      this.tipoForm = false;
      this.registerForm.get('tipo').setValue('1');
      this.removeControls();
    }
    //console.log("despues",this.registerForm.value);
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
        return;
    }
    console.log('SUCCESS!! :-)',this.registerForm.value);
 
    this.spinner.show();
  	this.userService.createProvider(this.registerForm.value)
  	.subscribe((response: any) => {
  		console.log(response);
  		this.spinner.hide();
  		this.router.navigate(['/ingresar']);
  	}, (error: any) => {
  		console.log(error);
	  		return;
  	})
  }

  goBack(){
    this.router.navigate(["/home"]);
  }

}
