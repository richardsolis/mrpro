import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { HttpClient } from '@angular/common/http';
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
}
