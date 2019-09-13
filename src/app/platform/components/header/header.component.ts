import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SessionService } from "../../../services/session.service";

@Component({
  selector: "ptfm-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  user: any = {};
  submenu = false;
  visible = true;

  constructor(private session: SessionService, private router: Router) {}

  ngOnInit() {
    this.user = this.session.getObject("user");
    console.log(this.user);
    if(this.user){
      this.visible = false;
    }
  }
  menu() {
    if (this.submenu == false) {
      this.submenu = true;
    } else {
      this.submenu = false;
    }
  }
  logout() {
    this.session.destroy("user");
    this.user = {};
    this.visible = true;
    this.router.navigate(["/home"]);
  }
  ingresarClear() {
    this.session.destroy("providers");
    this.session.destroy("userProvider");
    this.session.destroy("provider");
    this.session.destroy("budget");
    this.session.destroy("token");
  }
}
