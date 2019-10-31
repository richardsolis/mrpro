import { Injectable } from '@angular/core';
import { GeneralService } from './general.service';
import { AppSettings } from '../app.settings';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

  constructor(private http: HttpClient,private generalS: GeneralService) { }

  getAdmins() {
    var header = this.generalS.getToken({}, "application/json");
    return this.http.get(AppSettings.BASE_PATH + AppSettings.GET_DASHBOARD_ADMIS, header);
  }

  getOneAdmin(adminID: string) {
    var header = this.generalS.getToken({}, "application/json");
    const url = `${AppSettings.BASE_PATH}${AppSettings.GET_ONE_DASHBOARD_ADMI}/${adminID}`;
    return this.http.get(url, header);
  }

  DeleteOneAdmin(adminID: string) {
    var header = this.generalS.getToken({}, "application/json");
    const url = `${AppSettings.BASE_PATH}${AppSettings.DELETE_DASHBOARD_ADMI}/${adminID}`;
    return this.http.delete(url, header);
  }

  postCreateAdmin(params) {
    const obj = {
      name: params.name,
      lastname: params.lastname,
      email: params.email,
      password: params.password,
      password_confirmation: params.password_confirmation,
      phone: params.phone,
      doc_number: params.doc_number
    };
    console.log(obj);
    const body = new HttpParams({
      fromObject: obj
    });
    
    var header = this.generalS.getToken({}, "application/json");

    return this.http.post(AppSettings.BASE_PATH + AppSettings.POST_CREATE_DASHBOARD_ADMI, body, header);
  }

  putUpdateAdmin(params){
    let obj = {};
    if(params.password == undefined || params.password == null || params.password == ""){
      obj = {
        name: params.name,
        lastname: params.lastname,
        email: params.email,
        phone: params.phone,
        doc_number: params.doc_number
      };
    }else{
      obj = {
        name: params.name,
        lastname: params.lastname,
        email: params.email,
        password: params.password,
        password_confirmation: params.password_confirmation,
        phone: params.phone,
        doc_number: params.doc_number
      };
    }

    console.log(obj);
    const body = new HttpParams({
      fromObject: obj
    });
    var header = this.generalS.getToken({}, "application/x-www-form-urlencoded");
    const url = `${AppSettings.BASE_PATH}${AppSettings.PUT_UPDATE_DASHBOARD_ADMI}/${params.id}`;
    return this.http.put(url, body, header);
  }

  
}
