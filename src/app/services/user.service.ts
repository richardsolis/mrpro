import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { AppSettings } from "../app.settings";
import { GeneralService } from "./general.service";
import { SessionService } from "./session.service";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient, private generalS: GeneralService, private sessionS: SessionService) {}

  guestCreateUser(params) {
    const body = new HttpParams({
      fromObject: params
    });
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });
    const options = { headers: headers };

    return this.http.post(AppSettings.BASE_PATH + AppSettings.GUEST_CREATE_USER, body, options);
  }

  createProvider(params){
    const obj = {
      name: params.nombre,
      lastname: params.apellidos,
      email: (params.correo == undefined)? params.pcorreo : params.correo,
      password: params.contrasena,
      password_confirmation: params.contrasena2,
      phone: params.ptelefono,
      image: params.foto,
      address: params.direccion,
      emergency: '',
      ruc: (params.ruc == undefined)? "" : params.ruc,
      experience: params.experiencia,
      type_provider: params.tipo,
      logo: (params.logo == undefined)? (params.foto == undefined)? "" : params.foto  : params.logo,
      r_social: params.rSocial,
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
      categories: params.categories,
      districts: params.districts
    };
    console.log(obj);
    const body = new HttpParams({
      fromObject: obj
    });
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });
    const options = { headers: headers };

    return this.http.post("http://admin-mrpro.mrpro.pe/api/provider/create", body, options);
  }

  postSaveImageUser(image){
    const formData = new FormData();
    formData.append("image",image);
    const headers = new HttpHeaders({
    });

    const options = { headers: headers };
    return this.http.post("http://admin-mrpro.mrpro.pe/api/guest/update/image", formData, options);
  }

  getCurrentUser(params = {}) {
    const body = JSON.stringify(params);
    var header = this.generalS.getToken();
    return this.http.post(AppSettings.BASE_PATH + AppSettings.CURRENT_USER, body, header);
  }

  sendBudget(params) {
    const body = new HttpParams({
      fromObject: params
    });
    var header = this.generalS.getToken({}, "application/x-www-form-urlencoded");
    return this.http.post(AppSettings.BASE_PATH + AppSettings.CLIENT_SEND_BUDGET, body, header);
  }

  getBudget(params) {
    const body = new HttpParams({
      fromObject: params
    });
    var header = this.generalS.getToken();
    return this.http.post(AppSettings.BASE_PATH + AppSettings.CLIENT_GET_BUDGET, body, header);
  }

  getStatus() {
    return this.http.get(AppSettings.BASE_PATH + AppSettings.GET_ESTATUS_BUDGET);
  }

  cancel(params) {
    const body = new HttpParams({
      fromObject: params
    });
    var header = this.generalS.getToken();

    return this.http.post(AppSettings.BASE_PATH + AppSettings.CANCEL, body, header);
  }

  getToken(params = {}, contentType = "application/json") {
    return {
      headers: {
        Authorization: this.sessionS.getObject("token").token_type + " " + this.sessionS.getObject("token").access_token
      },
      params: params
    };
  }
}
