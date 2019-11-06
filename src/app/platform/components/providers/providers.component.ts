import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { ActivatedRoute, Router, RouterModule, Routes } from "@angular/router";
import { SessionService } from "../../../services/session.service";
import { UserService } from "../../../services/user.service";
import { NgxSpinnerService } from "ngx-spinner";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subject } from "rxjs";
import { DataTableDirective } from "angular-datatables";
import { AppSettings } from "../../../app.settings";

declare var jquery: any;
declare var $: any;

@Component({
  selector: "app-providers",
  templateUrl: "./providers.component.html",
  styleUrls: ["./providers.component.css"]
})
export class ProvidersComponent implements OnInit, OnDestroy {
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
  statusList: any[];

  flagPenalty: boolean = false;
  messagePenalty: string = "";

  @ViewChild(DataTableDirective) dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private spinner: NgxSpinnerService, private router: Router,  private _route:ActivatedRoute,
              private session: SessionService, private userS: UserService,
              private formBuilder: FormBuilder) {
    this.userS.getStatus()
      .subscribe((response: any) => {
        this.statusList = response.data.filter(state => { 
                                                if(state.id !== 2 && state.id !== 3 && state.id !== 5)
                                                  return state; 
                                              });
      }, (error: any) => {
        console.log(error);
      });
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      order: [[0,'desc']],
      language: AppSettings.LANG_SPANISH
    };

    this._route.params.subscribe(res => {
      if(res.status){
        this.estado = res.status;
      }else{
        this.estado = "1";
      }
    })
    this.getRequests();
    this.registerForm = this.formBuilder.group({
      score:  [null, Validators.required],
      comment:  ['', Validators.required],
      user_provider_id: ['', Validators.required],
      budget_id: ['', Validators.required]
    });
  }

  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }

  filterInit(){
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.columns().every(function () {
          const that = this;
          $('input').val('');
          $('input', this.footer()).on('keyup change', function () {
            if (that.search() !== this['value']) {
              that
                .search(this['value'])
                .draw();
            }
          });
        });
      });
  }

  rerender(){
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.getRequests();
    });
  }

  getRequests(){
    this.resultFilter = [];
    this.spinner.show();
    this.userS.getBudget({ type: "client", status: this.estado }).subscribe(
      response => {
        this.providers = response;
        this.resultFilter.push(...this.providers.data);
        this.dtTrigger.next();
        console.log(this.resultFilter);
        this.filterInit();
        this.spinner.hide();
      },
      error => console.log(error)
    );
  }

  checkout(client_score: string){
    if(client_score == '0'){
      return false;
    }else{
      return true;
    }
  }

  verifyTypePay(card_bank_id:any){
    if(card_bank_id){
      return false;
    }else{
      return true;
    }
  }

  closeService(mymodal,providerID: string ,BudgetID: string){
    this.registerForm.setValue({score: '0',comment:'',user_provider_id:'', budget_id: ''});
      this.registerForm.get('user_provider_id').setValue(providerID);
      this.registerForm.get('budget_id').setValue(BudgetID);
      
      mymodal.open();
  }

  Rating(cmodal){
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
          cmodal.close();
          this.spinner.hide();
          this.rerender();
        }, (error: any) => {
          console.log(error);
          this.spinner.hide();
        });
  }

  ficha(modal, proveedor) {
    this.tprovider = proveedor;
    modal.open();
  }

  getActualDate(){
    let today = new Date();
    const day = ("0" + (today.getDate())).slice(-2);
    const month = ("0" + (today.getMonth() + 1)).slice(-2);
    const year = today.getFullYear();
    return `${year}-${month}-${day}`;
  }

  confirm(modal, BudgetID, accepted: string = null, date_service: string = null){
    this.flagPenalty = false;
    this.BudgetID = BudgetID;
    modal.open();
    if(date_service){
      let today = new Date(this.getActualDate());
      let serviceDate = new Date(date_service.split(' ')[0]);
      let result = (serviceDate.getTime() <= today.getTime())? true: false;
      if(accepted == '1' && result == true){
        this.flagPenalty = true;
        this.messagePenalty = "Si cancela la solicitud hecha, se aplicará una penalidad que se descontará automaticamente de su tarjeta.";  
      }
    }
  }

  schedule(fmodal) {
    console.log(this.BudgetID);
      this.cancel = {
        budget_id: this.BudgetID,
        status_id: '2'
      };
      this.userS.cancel(this.cancel).subscribe(response => {
        console.log(response);
        fmodal.close();
        this.rerender();
      });
    
  }

  goChat(chatId: string, BudgetID: string){
    
    this.router.navigate(['/proveedor/chat',chatId, BudgetID]);
    
  }
}
