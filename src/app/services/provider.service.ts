import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AppSettings } from '../app.settings';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http: HttpClient,private generalS: GeneralService) { }

  guestGetProviders(params){
  	const body = JSON.stringify(params);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    }); 
    const options = { headers: headers };
    
  	return this.http.post(AppSettings.BASE_PATH + AppSettings.GUEST_GET_PROVIDERS, body, options);
  }

  postUpdateProviders(params) {
    const obj = {
      name: params.nombre,
      lastname: params.apellidos,
      email: (params.correo == undefined)? params.pcorreo : params.correo,
      password: params.contrasena,
      password_confirmation: params.contrasena2,
      phone: params.ptelefono,
      image: params.foto,
      address: params.direccion,
      emergency: '1',
      ruc: (params.ruc == undefined)? "" : params.ruc,
      experience: params.experiencia,
      type_provider: params.tipo,
      logo: (params.logo == undefined)? (params.foto == undefined)? "" : params.foto  : params.logo,
      r_social: (params.rSocial == undefined)? "" : params.rSocial,
      a_fiscal: (params.dfiscal == undefined)? "" : params.dfiscal,
      a_comercial: (params.dComercial == undefined)? "" : params.dComercial,
      a_taller: (params.dTaller == undefined)? "" : params.dTaller,
      url: (params.sWeb == undefined)? "" : params.sWeb,
      a_police: (params.policales == undefined)? "" : params.policales,
      a_penal: params.penales,
      a_judicial: params.judiciales,
      bank_id: params.eBancaria,
      bank_c: params.nCuenta,
      bank_ci: params.interbancaria,
      categories: JSON.stringify(params.categories),
      districts: JSON.stringify(params.districts)
    };
    const body = new HttpParams({
      fromObject: obj
    });
    var header = this.generalS.getToken({}, "application/x-www-form-urlencoded");
    return this.http.post(AppSettings.BASE_PATH + AppSettings.UPDATE_PROVIDER, body, header);
  }
}
