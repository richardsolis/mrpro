import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import { SessionService } from '../../../services/session.service';
import { GeneralService } from 'src/app/services/general.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	user:any = {
		username: '',
		password: '',
		grant_type: "password",
		client_id: 2,
		client_secret: "tgOahYqzhbWMrjsDKPGsP2qSGU22dVxxNcfrt0lr"
	};
	userdata:any = {};
	message = 'Datos incorrectos';

  constructor(private spinner: NgxSpinnerService, private router: Router,
			  private session: SessionService, private generalS: GeneralService, 
			  private userS: UserService) { }

  ngOnInit() {
  	// this.spinner.show();
  }

  login(myModal){
  	this.message = '';
  	if(!this.user.username || !this.user.password){
		this.message = 'Campos incompletos';
		myModal.open(); 
		return; 
  	}
  	else{
		this.spinner.show();
		console.log(this.user);
		this.generalS.login(this.user).subscribe(
		  response => {
			this.session.setObject("token", response);
			this.userS.getCurrentUser().subscribe((response: any) => {
			  console.log(response);
			  if(response.data.client == null && response.data.provider == null){
				this.session.setObject("admi", { ...response.data });
				this.spinner.hide();
				this.router.navigate(['/admin/pedido']);
			  }else{
				this.message = "Usuario no autorizado.";
				myModal.open();
				this.spinner.hide();
			  }
			});
			// this.router.navigate(['/reservado']);
		  },
		  error => {
			console.log(error);
			this.message = "Usuario y/o contraseña incorrectos";
			myModal.open();
			this.spinner.hide();
		  }
		);
  	}
  }
}
