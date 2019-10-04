import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import { SessionService } from "../../../services/session.service";
import { UserService } from "../../../services/user.service";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-register-email",
  templateUrl: "./register-email.component.html",
  styleUrls: ["./register-email.component.css"]
})
export class RegisterEmailComponent implements OnInit {
  user: any = {
    social: "",
    email: "",
    name: "",
    lastname: "",
    phone: "",
    password: "",
    password_confirmation: "",
    image: "",
    cpolicy: false,
    cconditions: false,
    doc_number: ""
  };
  message = "";
  image: any;
  flagSize: boolean = false;
  userSocial: any = {};
  flagSocial: boolean = true;

  constructor(private session: SessionService, private spinner: NgxSpinnerService, private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.userSocial = this.session.getObject('userSocial');
    if(this.userSocial){
      this.flagSocial = false;
      this.session.destroy('userSocial');
      console.log(this.userSocial);
      this.user.social = this.userSocial.social;
      this.user.email = this.userSocial.email;
      this.user.name = this.userSocial.name;
      this.user.password = this.userSocial.password;
      this.user.password_confirmation = this.userSocial.password_confirmation;
      this.user.image = this.userSocial.image;
    }
  }

  selectFile(event) {
    console.log(event);

    if (!event) {
      this.user.image = "";
      return;
    }

    if (event.target.files[0].type.indexOf("image") < 0) {
      this.user.image = "";
      return;
    }

    if (event.target.files[0].size > 2500000) {
      this.flagSize = true;
      this.user.image = "";
      return;
    }
    this.flagSize = false;
    this.image = event.target.files[0];
    /*this.spinner.show();
    this.userService.postSaveImageUser(this.image)
      .subscribe((response: any) => {
        console.log(response);
        this.spinner.hide();
      }, (error: any) => {
        console.log(error);
    })*/
  }

  login(myModal) {
    var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (this.user.email && !re.test(this.user.email)) {
      this.message = "Correo incorrecto";
      myModal.open();
      return;
    }

    if (!this.user.email || !this.user.name || !this.user.lastname || !this.user.phone || !this.user.password) {
      this.message = "Campos incompletos";
      myModal.open();
      return;
    }

    if (this.user.password.length < 8) {
      this.message = "Contraseña minimo de 8 caracteres";
      myModal.open();
      return;
    }

    if (this.user.password != this.user.password_confirmation) {
      this.message = "Contraseñas diferentes";
      myModal.open();
      return;
    }

    if (!this.user.cpolicy) {
      this.message = "Acepta las politicas de privacidad";
      myModal.open();
      return;
    }

    if (!this.user.cconditions) {
      this.message = "Acepta los terminos y condiciones";
      myModal.open();
      return;
    }

    /*if (!this.image) {
      this.message = "Seleccione imagen";
      myModal.open();
      return;
    }*/

    console.log(this.image);
    this.spinner.show();
    this.userService.postSaveImageUser(this.image).subscribe(
      (response: any) => {
        console.log(response);
        this.user.image = response.data;
        this.userService.guestCreateUser(this.user).subscribe(
          (response: any) => {
            console.log(response);
            this.spinner.hide();
            this.session.setObject("userlogin", this.user);
            this.router.navigate(["/ingresar"]);
          },
          (error: any) => {
            console.log(error);
            if (error.error && error.error.data && error.error.data.email && error.error.data.email.length) {
              this.message = "El correo electronico ya esta registrado";
              myModal.open();
              this.spinner.hide();
              return;
            }
            if (error.error && error.error.data && error.error.data.doc_number) {
              this.message = "El DNI ya esta registrado";
              myModal.open();
              this.spinner.hide();
              return;
            }
          }
        );
        this.spinner.hide();
      },
      (error: any) => {
        console.log(error);
      }
    );

    this.spinner.show();
  }

  onlydigit(e) {
    var tecla;
    var patron;
    var tecla_final;
    tecla = document.all ? e.keyCode : e.which;
    if (tecla == 8) {
      return true;
    }
    patron = /[0-9.]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
  }
}
