import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  title:string = "";

  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit() {
  }

  newUser(modal, tempTittle:string) {
    console.log("OpenModal Usuario - ", tempTittle);
    this.title = tempTittle;
    this.spinner.show();
    modal.open();
    this.spinner.hide();

  }

  saveUser(modal){
    console.log("CloseModal Usuario");
    this.spinner.show();
    modal.close();
    this.spinner.hide();
  }

}
