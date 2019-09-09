import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

  title:string = "";

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

  newProvider(modal, tempTittle:string) {
    console.log("OpenModal Usuario - ", tempTittle);
    this.title = tempTittle;
    this.spinner.show();
    modal.open();
    this.spinner.hide();

  }

  saveProvider(modal){
    console.log("CloseModal Usuario");
    this.spinner.show();
    modal.close();
    this.spinner.hide();
  }

}
