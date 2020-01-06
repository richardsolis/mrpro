import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  message = '';
  flagRes = false;

  flagPsw = false;
  mailBase64 = "";

  constructor(public Router:Router, private route: ActivatedRoute,private formBuilder: FormBuilder,	private spinner: NgxSpinnerService,
              private userService: UserService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', [Validators.required,Validators.minLength(8)]),
      'password_confirmation': new FormControl('', [Validators.required,Validators.minLength(8)])
    });
    this.route.paramMap.subscribe(params => {
     this.mailBase64 = window.atob(params.get("id"));
    })
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(String(this.mailBase64).toLowerCase())) {
        this.Router.navigateByUrl('/home');
      }
  }

  onSubmit(myModal) {
 
    if (this.registerForm.invalid) {
        this.submitted = true;
        return;
    }

    if(this.registerForm.get('password').value !== this.registerForm.get('password_confirmation').value){
        this.flagPsw = true;
        return
      
    }

    console.log('SUCCESS!! :-)',this.registerForm.value);
 
    this.spinner.show();
  	this.userService.changePassword(this.registerForm.value)
  	.subscribe((response: any) => {
      console.log(response);
      this.submitted = false;
      this.flagRes = true;
      this.message = 'El cambio de su contraseña ha sido efectuado correctamente, por favor dirijase a iniciar sesión nuevamente.';
      myModal.open();
      this.registerForm.setValue({
        email: '',
        password: '',
        password_confirmation: ''
      });
  		this.spinner.hide();
  	}, (error: any) => {
       console.log(error);
      this.submitted = false;
      this.flagRes = false;
      this.message = 'Ocurrio un error, intentelo mas tarde.';
      myModal.open();
      this.spinner.hide();
	  		return;
  	})
  }

}
