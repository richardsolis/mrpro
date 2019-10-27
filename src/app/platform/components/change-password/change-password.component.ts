import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from '../../../services/user.service';

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

  constructor(private formBuilder: FormBuilder,	private spinner: NgxSpinnerService,
              private userService: UserService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', [Validators.required,Validators.minLength(8)]),
      'password_confirm': new FormControl('', [Validators.required,Validators.minLength(8)])
    });
  }

  onSubmit(myModal) {
 
    if (this.registerForm.invalid) {
        this.submitted = true;
        return;
    }

    if(this.registerForm.get('password').value !== this.registerForm.get('password_confirm').value){
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
        email: ''
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
