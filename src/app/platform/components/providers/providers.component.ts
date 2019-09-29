import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterModule, Routes } from "@angular/router";
import { SessionService } from "../../../services/session.service";
import { UserService } from "../../../services/user.service";
import { NgxSpinnerService } from "ngx-spinner";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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
  registerForm: FormGroup;
  BudgetID = "";
  validFlag: boolean = false;

  constructor(private spinner: NgxSpinnerService, private router: Router, 
              private session: SessionService, private userS: UserService,
              private formBuilder: FormBuilder) {
    
  }

  ngOnInit() {
    this.estado = "1";
    this.getRequests();
    this.registerForm = this.formBuilder.group({
      score:  ['0', Validators.required],
      comment:  ['', Validators.required],
      user_provider_id: ['', Validators.required]
    });
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

  closeService(mymodal,providerID: string ,BudgetID: string){
    this.registerForm.setValue({score: '0',comment:'',user_provider_id:''});
      this.registerForm.get('user_provider_id').setValue(providerID);
      this.BudgetID = BudgetID;
      mymodal.open();
  }

  Rating(){
    if (this.registerForm.invalid || this.registerForm.get('score').value === '0') {
      this.validFlag = true;
      return;
    }
    console.log(this.registerForm.value);
    this.validFlag = false;
    this.spinner.show();
    this.userS.scoreOfClient(this.registerForm.value)
        .subscribe((res: any) => {
          console.log(res);
          this.userS.updateStatus('6',this.BudgetID)
              .subscribe((res: any) => {
                console.log(res);
                this.spinner.hide();
                location.reload();
              }, (error: any) => {
                console.log(error);
                this.spinner.hide();
              });
        }, (error: any) => {
          console.log(error);
          this.spinner.hide();
        });
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
