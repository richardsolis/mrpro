import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(private http: HttpClient,private generalS: GeneralService) { }

  getBudgets() {
    var header = this.generalS.getToken({}, "application/json");
    return this.http.get(AppSettings.BASE_PATH + AppSettings.GET_DASHBOARD_BUDGETS, header);
  }

  getExportExcelBudgets() {
    var header = this.generalS.getToken({}, "application/json");
    return this.http.get(AppSettings.BASE_PATH + AppSettings.GET_EXPORT_EXCEL_BUDGET, header);
  }

  getOneBudget(budgetID: string) {
    var header = this.generalS.getToken({}, "application/json");
    const url = `${AppSettings.BASE_PATH}${AppSettings.GET_ONE_DASHBOARD_BUDGET}/${budgetID}`;
    return this.http.get(url, header);
  }

  DeleteOneBudget(budgetID: string) {
    var header = this.generalS.getToken({}, "application/json");
    const url = `${AppSettings.BASE_PATH}${AppSettings.DELETE_DASHBOARD_BUDGET}/${budgetID}`;
    return this.http.delete(url, header);
  }

  SendEmailBudget(emailP, params) {
    const obj = {
      mail: emailP,
      subject: params.subject,
      body: params.body
    };
    console.log(obj);
    const body = new HttpParams({
      fromObject: obj
    });
    
    var header = this.generalS.getToken({}, "application/json");

    return this.http.post(AppSettings.BASE_PATH + AppSettings.POST_DASHBOARD_SEND_EMAIL_BUDGET, body, header);
  }
}
