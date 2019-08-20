import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { SessionService } from '../../../services/session.service';
import { UserService } from '../../../services/user.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-register-email',
  templateUrl: './register-email.component.html',
  styleUrls: ['./register-email.component.css']
})
export class RegisterEmailComponent implements OnInit {
	user:any = {
		email: '',
		name: '',
		lastname: '',
		phone: '',
		password: '',
		password_confirmation: '',
		image: '',
		cpolicy: false,
		cconditions: false,
	};
	message = '';
  constructor(private session:SessionService,
  	private spinner: NgxSpinnerService,
  	private router:Router,
  	private userService: UserService,) { }

  ngOnInit() {
  }

  login(myModal){
  	var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  	if(this.user.email && !re.test(this.user.email)){
  		this.message = 'Correo incorrecto';
  		myModal.open();
  		return;
  	}

  	if(!this.user.email || !this.user.name || !this.user.lastname || !this.user.phone || !this.user.password){
  		this.message = 'Campos incompletos';
  		myModal.open();
  		return;
  	}

  	if(this.user.password != this.user.password_confirmation){
  		this.message = 'Contraseñas diferentes';
  		myModal.open();
  		return;
  	}

  	if(!this.user.cpolicy){
  		this.message = 'Acepta las políticas de privacidad';
  		myModal.open();
  		return;
  	}

  	if(!this.user.cconditions){
  		this.message = 'Acepta los términos y condiciones';
  		myModal.open();
  		return;
  	}

  	if(!this.user.image){
  		delete this.user.image;
  	}

  	this.spinner.show();
  	this.userService.guestCreateUser(this.user)
  	.subscribe((response: any) => {
  		console.log(response);
  		this.spinner.hide();
  		this.session.setObject('userlogin', this.user);
  		this.router.navigate(['/ingresar']);
  	}, (error: any) => {
  		console.log(error);
  		if(error.error && error.error.data && error.error.data.email && error.error.data.email.length){
  			this.message = 'El correo electrónico ya está registrado';
	  		myModal.open();
  			this.spinner.hide();
	  		return;
  		}
  	})
  }

  	onlydigit(e) {
	  var tecla;
	  var patron;
	  var tecla_final;
	  tecla = (document.all) ? e.keyCode : e.which;
	  if (tecla == 8) {
	    return true;
	  }
	  patron = /[0-9.]/;
	  tecla_final = String.fromCharCode(tecla);
	  return patron.test(tecla_final);
	}

}
