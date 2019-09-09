import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-commission',
  templateUrl: './commission.component.html',
  styleUrls: ['./commission.component.css']
})
export class CommissionComponent implements OnInit {

  title:string = "";

  constructor(private spinner: NgxSpinnerService) { 
     
  }

  ngOnInit() {
  }

  newComission(modal, tempTittle:string) {
    console.log("OpenModal Comsion - ", tempTittle);
    this.title = tempTittle;
    this.spinner.show();
    modal.open();
    this.spinner.hide();

  }

  saveComision(modal){
    console.log("CloseModal Comsion");
    this.spinner.show();
    modal.close();
    this.spinner.hide();
  }

}
