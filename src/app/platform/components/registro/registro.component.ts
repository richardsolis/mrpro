import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../../services/session.service';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, LinkedinLoginProvider } from 'angular-6-social-login';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
	user:any = {
		username: 'user1',
		password: 'user1',
	};
  message = '';
  userSocial: any = {
    social: "1",
    email: "",
    name: "",
    password: "",
    password_confirmation: "",
    image: ""
  };

  constructor(private socialAuthService: AuthService,
  	private spinner: NgxSpinnerService,
  	private router: Router,
  	private session: SessionService) { }

  ngOnInit() {
  }

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "linkedin") {
      socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData
        this.userSocial.email = userData.email;
        this.userSocial.name = userData.name;
        this.userSocial.password = userData.id;
        this.userSocial.password_confirmation = userData.id;
        this.userSocial.image = userData.image;
        this.session.setObject('userSocial', this.userSocial);
        this.router.navigate(["/registro/mail"]);
      }
    );
  }

  login(myModal){
  	if(!this.user.username || !this.user.password){
  		this.message = 'Campos incompletos';
  		myModal.open();
  		return;
  	}
  	this.session.setObject('user', {
  		firstname: 'User 1',
  		lastname: 'Mc Pro',
  		username: 'user1',
  		image: 'user.png'
  	})
  	this.router.navigate(['/reservado']);
  }

}
