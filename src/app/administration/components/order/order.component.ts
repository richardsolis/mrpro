import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BudgetService } from '../../../services/budget.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { AppSettings } from '../../../app.settings';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
selector: 'app-order',
templateUrl: './order.component.html',
styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

registerForm: FormGroup;
submitted: boolean = false;

title:string = "";
budgetList: any[];
tmpBudget: any = {};
ORDER_ID: string = "";

flagResP: boolean = false;
messageP: string = "";

@ViewChild(DataTableDirective) dtElement: DataTableDirective;
dtOptions: DataTables.Settings = {};
dtTrigger: Subject<any> = new Subject();

constructor(private formBuilder: FormBuilder, private spinner: NgxSpinnerService, 
            private budgetService: BudgetService) { }

ngOnInit() {
  this.registerForm = this.formBuilder.group({
    subject: ['', Validators.required],
    description: ['', Validators.required]
  });

  this.dtOptions = {
    pagingType: 'full_numbers',
    order: [[0,'desc']],
    language: AppSettings.LANG_SPANISH
  };
  this.getBudgetList();
}

ngOnDestroy() {
  this.dtTrigger.unsubscribe();
}

rerender(){
  this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
    dtInstance.destroy();
    this.getBudgetList();
  });
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

getBudgetList(){
  this.budgetList = [];
  this.spinner.show();
  this.budgetService.getBudgets().subscribe(
    response => {
      console.log(response);
      let budgets:any = response;
      this.budgetList.push(...budgets.data);
      this.dtTrigger.next();
      this.filterInit();
      this.spinner.hide();
    },
    error =>{
      console.log(error);
      this.spinner.hide();
  });
}

CountDays(createdDay: string){
  let startDate = new Date(createdDay.split(' ')[0]).getTime();
  let EndDate = new Date().getTime();
  const diff = EndDate - startDate;
  return Math.trunc(diff/(1000*3600*24));
}

confirm(cmodal, orderID: string){
  this.ORDER_ID = "";
  cmodal.open();
  this.ORDER_ID = orderID;
}

deleteBudget(cmodal) {
  this.spinner.show();
  this.budgetService.DeleteOneBudget(this.ORDER_ID).subscribe(
    response => {
      console.log(response);
      this.ORDER_ID = "";
      cmodal.close();
      this.rerender();
      this.spinner.hide();
    },
    error =>{
      console.log(error);
      this.spinner.hide();
  });
}

budgetDetail(modal, budget:any) {
  this.registerForm.setValue({subject: '', description: ''});
  this.spinner.show();
  this.tmpBudget = {
    provider: budget.user_provider.user,
    client: budget.user_client.user,
    address: budget.address,
    description: budget.description,
    date_service: budget.date_service,
    category_service: budget.category_service,
    parent_category: budget.parent_category
  };
  console.log("OpenModal Comsion - ", this.tmpBudget);
  modal.open();
  this.spinner.hide();
}

onSubmit(myModal){
  this.flagResP = false;
  if (this.registerForm.invalid) {
    console.log('invalidos');
    this.submitted = true;
    return;
  }
  console.log(this.registerForm.value);
  this.spinner.show();
  this.budgetService.SendEmailBudget(this.tmpBudget.provider.email, this.registerForm.value).subscribe(
    response => {
      console.log(response);
      this.flagResP = true;
      this.messageP = 'Correo enviado al proveedor.';
      this.submitted = false;
      myModal.close();
      this.rerender();
      this.registerForm.setValue({ subject: '', body: '' });
      this.spinner.hide();
    },
    error =>{
      this.submitted = false;
      console.log(error);
      this.spinner.hide();
  });

}

}
