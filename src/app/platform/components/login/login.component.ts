import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { SessionService } from "../../../services/session.service";
import { UserService } from "../../../services/user.service";
import { GeneralService } from "../../../services/general.service";
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, LinkedinLoginProvider } from "angular-6-social-login";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  user: any = {
    username: "",
    password: "",
    grant_type: "password",
    client_id: 2,
    client_secret: "tgOahYqzhbWMrjsDKPGsP2qSGU22dVxxNcfrt0lr"
  };
  message = "";
  data: any = {};

  constructor(private socialAuthService: AuthService, private router: Router, private route: ActivatedRoute, private session: SessionService, private generalS: GeneralService, private userS: UserService, private spinner: NgxSpinnerService) {}

  ngOnInit() {
    let user = this.session.getObject("userlogin");
    if (user && user.name) {
      this.user.username = user.email;
      this.user.password = user.password;
      this.login();
    }
  }

  public socialSignIn(myModal,socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "linkedin") {
      socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    }
    console.log(socialPlatformProvider);
    this.socialAuthService.signIn(socialPlatformProvider).then(userData => {
      console.log(socialPlatform + " sign in data : ", userData);
      // Now sign-in with userData
      this.user.username = userData.email;
      this.user.password = userData.id;
      this.login(myModal);
    });
  }

  login(myModal = null, social = null) {
    if (!this.user.username || !this.user.password) {
      this.message = "Campos incompletos";
      myModal.open();
      return;
    }

    if (this.session.getObject("userlogin")) {
      this.session.destroy("userlogin");
    }
    this.spinner.show();
    console.log(this.user);
    this.generalS.login(this.user).subscribe(
      response => {
        this.session.setObject("token", response);
        this.userS.getCurrentUser().subscribe((response: any) => {
          console.log(response);
          if (response.data.client) {
            this.session.setObject("user", { ...response.data.client.user, type: response.data.type[0] });

            if (this.session.getObject("providers")) {
              this.router.navigate(["/pedir-propuesta"]);
            } else {
              this.router.navigate(["/home"]);
            }
          } else {
            this.session.setObject("user", { ...response.data.provider.user, type: response.data.type[0] });
            this.router.navigate(["/proveedor/home"]);
          }
          this.spinner.hide();
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
    // this.session.setObject('user', {
    // 	firstname: 'User 1',
    // 	lastname: 'Mc Pro',
    // 	username: 'user1',
    // 	image: 'user.png'
    // })
    // this.router.navigate(['/reservado']);
  }
}
