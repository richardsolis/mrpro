import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterModule, Routes } from "@angular/router";
import { SessionService } from "../../../services/session.service";
import { UserService } from "../../../services/user.service";
import { NgxSpinnerService } from "ngx-spinner";
import { FormBuilder, FormGroup } from "@angular/forms";

import localeDe from "@angular/common/locales/de";

declare var jquery: any;
declare var $: any;

@Component({
  selector: "app-providers",
  templateUrl: "./providers.component.html",
  styleUrls: ["./providers.component.css"]
})
export class ProvidersComponent implements OnInit {

  providers;
  resultFilter: any[];
  tprovider: any = {
    user_provider: {
      user: {}
    }
  };

  cancel: any = {
    budget_id: "2",
    status_id: "1"
  };

  estado:string;
  BudgetID = "";

  constructor(private spinner: NgxSpinnerService, private router: Router, private session: SessionService, private userS: UserService) {
    
  }

  ngOnInit() {
    this.estado = "1";
    this.getRequests();
  }

  getRequests(){
    this.resultFilter = [];
    this.spinner.show();
    this.userS.getBudget({ type: "client", status: this.estado }).subscribe(
      response => {
        this.providers = response;
        this.resultFilter.push(...this.providers.data);
        console.log(this.resultFilter);
        this.spinner.hide();
      },
      error => console.log(error)
    );
  }



  ficha(modal, proveedor) {
    this.tprovider = proveedor;
    modal.open();
  }

  confirm(modal, BudgetID){
    this.BudgetID = BudgetID;
    modal.open();
  }

  schedule() {
    console.log(this.BudgetID);
      this.cancel = {
        budget_id: this.BudgetID,
        status_id: '2'
      };
      this.userS.cancel(this.cancel).subscribe(response => {
        console.log(response);
        location.reload();
      });
    
  }

  goChat(chatId: string, BudgetID: string){
    
    this.router.navigate(['/proveedor/chat',chatId, BudgetID]);
    
  }
}
