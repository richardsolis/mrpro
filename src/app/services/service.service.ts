import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AppSettings } from '../app.settings';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient,private generalS: GeneralService) { }

  getCategories() {
    var header = this.generalS.getToken({}, "application/json");
    return this.http.get(AppSettings.BASE_PATH + AppSettings.GET_DASHBOARD_CATEGORIES, header);
  }

  getOneCategory(categoryID: string) {
    var header = this.generalS.getToken({}, "application/json");
    const url = `${AppSettings.BASE_PATH}${AppSettings.GET_ONE_DASHBOARD_CATEGORY}/${categoryID}`;
    return this.http.get(url, header);
  }

  DeleteOneCategory(categoryID: string) {
    var header = this.generalS.getToken({}, "application/json");
    const url = `${AppSettings.BASE_PATH}${AppSettings.DELETE_DASHBOARD_CATEGORY}/${categoryID}`;
    return this.http.delete(url, header);
  }

  postCreateCategory(params) {
    const obj = {
      parent: params.parent,
      name: params.name
    };
    console.log(obj);
    const body = new HttpParams({
      fromObject: obj
    });
    
    var header = this.generalS.getToken({}, "application/json");

    return this.http.post(AppSettings.BASE_PATH + AppSettings.POST_CREATE_DASHBOARD_CATEGORY, body, header);
  }

  putUpdateCategory(params){
    const obj = {
      parent: params.parent,
      name: params.name,
      status: params.status
    };
    console.log(obj);
    const body = new HttpParams({
      fromObject: obj
    });
    var header = this.generalS.getToken({}, "application/x-www-form-urlencoded");
    const url = `${AppSettings.BASE_PATH}${AppSettings.PUT_UPDATE_DASHBOARD_CATEGORY}/${params.id}`;
    return this.http.put(url, body, header);
  }

  putUpdateCategory2(params){
    const obj = {
      parent: params.parent,
      name: params.name
    };
    console.log(obj);
    const body = new HttpParams({
      fromObject: obj
    });
    var header = this.generalS.getToken({}, "application/x-www-form-urlencoded");
    const url = `${AppSettings.BASE_PATH}${AppSettings.PUT_UPDATE_DASHBOARD_CATEGORY}/${params.id}`;
    return this.http.put(url, body, header);
  }

  getPriceds() {
    var header = this.generalS.getToken({}, "application/json");
    return this.http.get(AppSettings.BASE_PATH + AppSettings.GET_DASHBOARD_PRICEDS, header);
  }

  getOnePriced(pricedID: string) {
    var header = this.generalS.getToken({}, "application/json");
    const url = `${AppSettings.BASE_PATH}${AppSettings.GET_ONE_DASHBOARD_PRICED}/${pricedID}`;
    return this.http.get(url, header);
  }

  DeleteOnePriced(pricedID: string) {
    var header = this.generalS.getToken({}, "application/json");
    const url = `${AppSettings.BASE_PATH}${AppSettings.DELETE_DASHBOARD_PRICED}/${pricedID}`;
    return this.http.delete(url, header);
  }

  postCreatePriced(params) {
    const obj = {
      parent: params.parent,
      name: params.name,
      price: params.price
    };
    console.log(obj);
    const body = new HttpParams({
      fromObject: obj
    });
    
    var header = this.generalS.getToken({}, "application/json");

    return this.http.post(AppSettings.BASE_PATH + AppSettings.POST_CREATE_DASHBOARD_PRICED, body, header);
  }

  putUpdatePriced(params){
    const obj = {
      parent: params.parent,
      name: params.name,
      price: params.price,
      status: params.status
    };
    console.log(obj);
    const body = new HttpParams({
      fromObject: obj
    });
    var header = this.generalS.getToken({}, "application/x-www-form-urlencoded");
    const url = `${AppSettings.BASE_PATH}${AppSettings.PUT_UPDATE_DASHBOARD_PRICED}/${params.id}`;
    return this.http.put(url, body, header);
  }

  getAllCertificate(){
    
    var header = this.generalS.getToken({}, "application/json");

    return this.http.get(AppSettings.BASE_PATH + AppSettings.CERTIFICATE, header);
  }

  getAllCertificateAll(){
    
    var header = this.generalS.getToken({}, "application/json");

    return this.http.get(AppSettings.BASE_PATH + AppSettings.CERTIFICATEGET, header);
  }

  setCardCredit(params) {
    const obj = {
      id: params,
    };
    console.log(obj);
    const body = new HttpParams({
      fromObject: obj
    });
    
    var header = this.generalS.getToken({}, "application/json");

    return this.http.post(AppSettings.BASE_PATH + AppSettings.CARDSET, body, header);
  }


  sendCancelProvider(params) {
    const obj = {
      budget_id: params,
    };
    console.log(obj);
    const body = new HttpParams({
      fromObject: obj
    });
    
    var header = this.generalS.getToken({}, "application/json");

    return this.http.post(AppSettings.BASE_PATH + AppSettings.SENDCANCELPORVIDER, body, header);
    
  }

  changeCerti(params){
    const obj = {
      company: params.company,
      name: params.name,
    };
    console.log(obj);
    const body = new HttpParams({
      fromObject: obj
    });
    var header = this.generalS.getToken({}, "application/x-www-form-urlencoded");
    const url = `${AppSettings.BASE_PATH}${AppSettings.CERTIFICATE}/${params.id}`;
    return this.http.put(url, body, header);
  }

  DeleteCerti(pricedID: string) {
    var header = this.generalS.getToken({}, "application/json");
    const url = `${AppSettings.BASE_PATH}${AppSettings.CERTIFICATE}/${pricedID}`;
    return this.http.delete(url, header);
  }

  sendCerti(params){
    const obj = {
      company: params.company,
      name: params.name,
    };
    console.log(obj);
    const body = new HttpParams({
      fromObject: obj
    });
    
    var header = this.generalS.getToken({});

    return this.http.post(AppSettings.BASE_PATH + AppSettings.CERTIFICATE, body, header);
  }


}
