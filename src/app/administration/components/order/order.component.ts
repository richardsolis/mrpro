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

deleteBudget(budgetID: string) {
  this.spinner.show();
  this.budgetService.DeleteOneBudget(budgetID).subscribe(
    response => {
      console.log(response);
      this.rerender();
      this.spinner.hide();
    },
    error =>{
      console.log(error);
      this.spinner.hide();
  });
}

onSubmit(myModal){
  if (this.registerForm.invalid) {
    console.log('invalidos');
    this.submitted = true;
    return;
  }

  console.log(this.registerForm.value);
}

}
