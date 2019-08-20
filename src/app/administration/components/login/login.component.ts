import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	user:any = {
		username: '',
		password: '',
	}
	userdata:any = {};
	message = 'Datos incorrectos';

  constructor(private spinner: NgxSpinnerService,
    private router: Router,
    private session: SessionService) { }

  ngOnInit() {
  	// this.spinner.show();
  }

  login(myModal){
  	this.message = '';
  	if(!this.user.username || !this.user.password){
  		this.message = 'Campos incompletos';
  	}
  	else{
  		if(this.user.username == 'admin'){
  			this.userdata = {
	  			firstname: 'Admin',
	  			lastname: 'Mr Pro',
	  			email: 'admin@mrpro.com',
	  			role: 1,
	  			permission: {
	  				user: {c: 1, r: 1, u: 1, d: 1},
	  				provider: {c: 1, r:1, u: 1, d: 1},
	  			}
	  		};
	  	}
	  	else if(this.user.username == 'user1'){
	  		this.userdata = {
	  			firstname: 'User',
	  			lastname: 'Mr Pro',
	  			email: 'user1@gmail.com',
	  			role: 2,
	  			permission: {
	  				user: {c: 0, r: 1, u: 1, d: 0},
	  				provider: {c: 0, r:1, u: 0, d: 0},
	  			}
	  		};
	  	}
	  	else if(this.user.username == 'provider1'){
	  		this.userdata = {
	  			firstname: 'Provider',
	  			lastname: 'Mr Pro',
	  			email: 'provider1@gmail.com',
	  			role: 3,
	  			permission: {
	  				user: {c: 0, r: 1, u: 0, d: 0},
	  				provider: {c: 0, r:1, u: 1, d: 0},
	  			}
	  		};
	  	}
	  	else {
	  		this.message = 'Datos incorrectos';
	  	}

  		this.session.setObject('user', this.userdata);
	}

  	if(this.message){
  		myModal.open();
  		return;
  	}

  	if(this.userdata['role'] == 1){
  		this.router.navigate(['/admin']);
  	}
  	else if(this.userdata['role'] == 2){
  		this.router.navigate(['/admin/select']);
  	}
  }

}
