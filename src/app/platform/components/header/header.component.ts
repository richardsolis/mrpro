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

  constructor(private session: SessionService, private router: Router) {}

  ngOnInit() {
    console.log(this.user);
    this.user = this.session.getObject("user");
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
    this.router.navigate(["/home"]);
  }
}
