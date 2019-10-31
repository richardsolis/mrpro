import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { AppSettings } from '../app.settings';
import { GeneralService } from './general.service';
import { Observable } from 'rxjs';
import { ResponseContentType, ResponseType } from '@angular/http';
import { map } from 'rxjs/operators';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http: HttpClient,private generalS: GeneralService, private sessionS: SessionService) { }

  postCreateProvider(params) {
    const obj = {
      status: params.status,
      doc_number: params.dni,
      name: params.nombre,
      lastname: params.apellidos,
      email: (params.correo == undefined)? params.pcorreo : params.correo,
      password: params.contrasena,
      password_confirmation: params.contrasena2,
      phone: params.ptelefono,
      website: params.psWeb,
      image: params.foto,
      address: params.direccion,
      //emergency: '1',
      ruc: (params.ruc == undefined)? "" : params.ruc,
      experience: params.experiencia,
      type_provider: params.tipo,
      logo: (params.logo == undefined)? (params.foto == undefined)? "" : params.foto  : params.logo,
      r_social: (params.rSocial == undefined)? "" : params.rSocial,
      a_fiscal: (params.dfiscal == undefined)? "" : params.dfiscal,
      a_comercial: (params.dComercial == undefined)? "" : params.dComercial,
      a_taller: (params.dTaller == undefined)? "" : params.dTaller,
      url: (params.sWeb == undefined)? "" : params.sWeb,
      a_police: (params.policiales == undefined)? "" : params.policiales,
      a_penal: (params.penales == undefined)? "" : params.penales,
      a_judicial: (params.judiciales == undefined)? "" : params.judiciales,
      bank_id: params.eBancaria,
      bank_c: params.nCuenta,
      bank_ci: params.interbancaria,
      categories: JSON.stringify(params.categories),
      districts: JSON.stringify(params.districts),
      company_phone: params.telefono,
      company_email: params.correo
    };
    console.log(obj);
    const body = new HttpParams({
      fromObject: obj
    });
    
    var header = this.generalS.getToken({}, "application/json");

    return this.http.post(AppSettings.BASE_PATH + AppSettings.POST_CREATE_DASHBOARD_PROVIDER, body, header);
  }

  postSetStatusProvider(params) {
    const obj = {
      provider_id: params.provider_id,
      status: params.status
    };
    console.log(obj);
    const body = new HttpParams({
      fromObject: obj
    });
    
    var header = this.generalS.getToken({}, "application/json");

    return this.http.post(AppSettings.BASE_PATH + AppSettings.POST_STATUS_DASHBOARD_PROVIDER, body, header);
  }

  postSaveMassiveProvider(params){
    const obj = {
      data: params.data
    };
    console.log(obj);
    const body = new HttpParams({
      fromObject: obj
    });
    
    var header = this.generalS.getToken({}, "application/json");

    return this.http.post(AppSettings.BASE_PATH + AppSettings.POST_MASSIVE_DASHBOARD_PROVIDER, body, header);
  }


  getProviders() {
    var header = this.generalS.getToken({}, "application/json");
    return this.http.get(AppSettings.BASE_PATH + AppSettings.GET_DASHBOARD_PROVIDERS, header);
  }

  getExportExcelProviders(){
    var header = {headers: {
      Authorization: this.sessionS.getObject("token").token_type + " " + this.sessionS.getObject("token").access_token
      },
      responseType: 'blob' as 'json',
    };
    return this.http.get(AppSettings.BASE_PATH + AppSettings.GET_EXPORT_EXCEL_PROVIDER, header);
  }

  getOneProvider(providerID: string) {
    var header = this.generalS.getToken({}, "application/json");
    const url = `${AppSettings.BASE_PATH}${AppSettings.GET_ONE_DASHBOARD_PROVIDER}/${providerID}`;
    return this.http.get(url, header);
  }

  guestGetProviders(params){
  	const body = JSON.stringify(params);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    }); 
    const options = { headers: headers };
    
  	return this.http.post(AppSettings.BASE_PATH + AppSettings.GUEST_GET_PROVIDERS, body, options);
  }

  putUpdateProvider(params){
    let obj = {};
    if(params.contrasena == undefined || params.contrasena == null || params.contrasena == ""){
      obj = {
        //doc_number: params.dni,
        id: params.id,
        status: params.status,
        name: params.nombre,
        lastname: params.apellidos,
        email: (params.correo == undefined)? params.pcorreo : params.correo,
        phone: params.ptelefono,
        website: params.psWeb,
        image: (params.foto == undefined)? "" : params.foto,
        address: params.direccion,
        //emergency: '1',
        ruc: (params.ruc == undefined)? "" : params.ruc,
        experience: params.experiencia,
        type_provider: params.tipo,
        logo: (params.logo == undefined)? (params.foto == undefined)? "" : params.foto  : params.logo,
        r_social: (params.rSocial == undefined)? "" : params.rSocial,
        a_fiscal: (params.dfiscal == undefined)? "" : params.dfiscal,
        a_comercial: (params.dComercial == undefined)? "" : params.dComercial,
        a_taller: (params.dTaller == undefined)? "" : params.dTaller,
        url: (params.sWeb == undefined)? "" : params.sWeb,
        a_police: (params.policiales == undefined)? "" : params.policiales,
        a_penal: (params.penales == undefined)? "" : params.penales,
        a_judicial: (params.judiciales == undefined)? "" : params.judiciales,
        bank_id: params.eBancaria,
        bank_c: params.nCuenta,
        bank_ci: params.interbancaria,
        categories: JSON.stringify(params.categories),
        districts: JSON.stringify(params.districts),
        company_phone: params.telefono,
        company_email: params.correo
      };
    }else{
      obj = {
        //doc_number: params.dni,
        id: params.id,
        status: params.status,
        name: params.nombre,
        lastname: params.apellidos,
        email: (params.correo == undefined)? params.pcorreo : params.correo,
        password: params.contrasena,
        password_confirmation: params.contrasena2,
        phone: params.ptelefono,
        website: params.psWeb,
        image: (params.foto == undefined)? "" : params.foto,
        address: params.direccion,
        //emergency: '1',
        ruc: (params.ruc == undefined)? "" : params.ruc,
        experience: params.experiencia,
        type_provider: params.tipo,
        logo: (params.logo == undefined)? (params.foto == undefined)? "" : params.foto  : params.logo,
        r_social: (params.rSocial == undefined)? "" : params.rSocial,
        a_fiscal: (params.dfiscal == undefined)? "" : params.dfiscal,
        a_comercial: (params.dComercial == undefined)? "" : params.dComercial,
        a_taller: (params.dTaller == undefined)? "" : params.dTaller,
        url: (params.sWeb == undefined)? "" : params.sWeb,
        a_police: (params.policiales == undefined)? "" : params.policiales,
        a_penal: (params.penales == undefined)? "" : params.penales,
        a_judicial: (params.judiciales == undefined)? "" : params.judiciales,
        bank_id: params.eBancaria,
        bank_c: params.nCuenta,
        bank_ci: params.interbancaria,
        categories: JSON.stringify(params.categories),
        districts: JSON.stringify(params.districts),
        company_phone: params.telefono,
        company_email: params.correo
      };
    }
    console.log(obj);
    const body = new HttpParams({
      fromObject: obj
    });
    var header = this.generalS.getToken({}, "application/x-www-form-urlencoded");
    const url = `${AppSettings.BASE_PATH}${AppSettings.PUT_CREATE_DASHBOARD_PROVIDER}/${params.id}`;
    return this.http.put(url, body, header);
  }

  postUpdateProviders(params) {
    let obj = {};
    if(params.contrasena == undefined || params.contrasena == null || params.contrasena == ""){
      obj = {
        //doc_number: params.dni,
        id: params.id,
        name: params.nombre,
        lastname: params.apellidos,
        email: (params.correo == undefined)? params.pcorreo : params.correo,
        phone: params.ptelefono,
        website: params.psWeb,
        image: params.foto,
        address: params.direccion,
        //emergency: '1',
        ruc: (params.ruc == undefined)? "" : params.ruc,
        experience: params.experiencia,
        type_provider: params.tipo,
        logo: (params.logo == undefined)? (params.foto == undefined)? "" : params.foto  : params.logo,
        r_social: (params.rSocial == undefined)? "" : params.rSocial,
        a_fiscal: (params.dfiscal == undefined)? "" : params.dfiscal,
        a_comercial: (params.dComercial == undefined)? "" : params.dComercial,
        a_taller: (params.dTaller == undefined)? "" : params.dTaller,
        url: (params.sWeb == undefined)? "" : params.sWeb,
        a_police: params.policiales,
        a_penal: params.penales,
        a_judicial: params.judiciales,
        bank_id: params.eBancaria,
        bank_c: params.nCuenta,
        bank_ci: params.interbancaria,
        categories: JSON.stringify(params.categories),
        districts: JSON.stringify(params.districts),
        company_phone: params.telefono,
        company_email: params.correo
      };
    }else{
      obj = {
        //doc_number: params.dni,
        id: params.id,
        name: params.nombre,
        lastname: params.apellidos,
        email: (params.correo == undefined)? params.pcorreo : params.correo,
        password: params.contrasena,
        password_confirmation: params.contrasena2,
        phone: params.ptelefono,
        website: params.psWeb,
        image: params.foto,
        address: params.direccion,
        //emergency: '1',
        ruc: (params.ruc == undefined)? "" : params.ruc,
        experience: params.experiencia,
        type_provider: params.tipo,
        logo: (params.logo == undefined)? (params.foto == undefined)? "" : params.foto  : params.logo,
        r_social: (params.rSocial == undefined)? "" : params.rSocial,
        a_fiscal: (params.dfiscal == undefined)? "" : params.dfiscal,
        a_comercial: (params.dComercial == undefined)? "" : params.dComercial,
        a_taller: (params.dTaller == undefined)? "" : params.dTaller,
        url: (params.sWeb == undefined)? "" : params.sWeb,
        a_police: params.policiales,
        a_penal: params.penales,
        a_judicial: params.judiciales,
        bank_id: params.eBancaria,
        bank_c: params.nCuenta,
        bank_ci: params.interbancaria,
        categories: JSON.stringify(params.categories),
        districts: JSON.stringify(params.districts),
        company_phone: params.telefono,
        company_email: params.correo
      };
    }
    console.log(obj);
    const body = new HttpParams({
      fromObject: obj
    });
    var header = this.generalS.getToken({}, "application/x-www-form-urlencoded");
    return this.http.post(AppSettings.BASE_PATH + AppSettings.UPDATE_PROVIDER, body, header);
  }
}
