import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AppSettings } from '../app.settings';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class CommissionService {

  constructor(private http: HttpClient,private generalS: GeneralService) { }

  getCommissions() {
    var header = this.generalS.getToken({}, "application/json");
    return this.http.get(AppSettings.BASE_PATH + AppSettings.GET_DASHBOARD_COMMISSION, header);
  }

  getOneCommission(commissionID: string) {
    var header = this.generalS.getToken({}, "application/json");
    const url = `${AppSettings.BASE_PATH}${AppSettings.GET_ONE_DASHBOARD_COMMISSION}/${commissionID}`;
    return this.http.get(url, header);
  }

  DeleteOneCommission(commissionID: string) {
    var header = this.generalS.getToken({}, "application/json");
    const url = `${AppSettings.BASE_PATH}${AppSettings.DELETE_DASHBOARD_COMMISSION}/${commissionID}`;
    return this.http.delete(url, header);
  }

  postCreateCommission(params) {
    const obj = {
      from: params.from,
      to: params.to,
      amount: params.amount
    };
    console.log(obj);
    const body = new HttpParams({
      fromObject: obj
    });
    
    var header = this.generalS.getToken({}, "application/json");

    return this.http.post(AppSettings.BASE_PATH + AppSettings.POST_CREATE_DASHBOARD_COMMISSION, body, header);
  }

  putUpdateCommission(params){
    const obj = {
      from: params.from,
      to: params.to,
      amount: params.amount
    };
    console.log(obj);
    const body = new HttpParams({
      fromObject: obj
    });
    var header = this.generalS.getToken({}, "application/x-www-form-urlencoded");
    const url = `${AppSettings.BASE_PATH}${AppSettings.PUT_CREATE_DASHBOARD_COMMISSION}/${params.id}`;
    return this.http.put(url, body, header);
  }
}
