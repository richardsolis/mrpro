import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BudgetService } from '../../../services/budget.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { AppSettings } from '../../../app.settings';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  title:string = "";
  budgetList: any[];

  @ViewChild(DataTableDirective) dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  
  constructor(private spinner: NgxSpinnerService, 
              private budgetService: BudgetService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      order: [[0,'desc']],
      language: AppSettings.LANG_SPANISH
    };
    this.getBudgetList();
    this.CountDays('2019-10-13 18:17:59');
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

  newClient(modal, budget:any) {
    
    console.log("OpenModal Comsion - ", budget);
    this.spinner.show();
      modal.open();
      this.spinner.hide();
    }

}
