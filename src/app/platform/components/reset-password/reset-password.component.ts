import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  message = '';

  constructor(private formBuilder: FormBuilder,	
              private spinner: NgxSpinnerService,private userService: UserService) { }

  ngOnInit() {
    /*this.registerForm = this.formBuilder.group({
      email: ['', Validators.required]
    });*/
    this.registerForm = new FormGroup({
      'email': new FormControl('', Validators.required)
    });
  }

  onSubmit(myModal) {
 
    if (this.registerForm.invalid) {
        this.submitted = true;
        return;
    }
    console.log('SUCCESS!! :-)',this.registerForm.value);
 
    this.spinner.show();
  	this.userService.resetPassword(this.registerForm.value)
  	.subscribe((response: any) => {
      console.log(response);
      this.submitted = false;
      this.message = 'Se envió satisfactoriamente.';
      myModal.open();
      this.registerForm.setValue({
        email: ''
      });
  		this.spinner.hide();
  	}, (error: any) => {
      this.submitted = false;
      this.spinner.hide();
  		console.log(error);
	  		return;
  	})
  }

}
