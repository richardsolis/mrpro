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

  createProvider(params) {
    const obj = {
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
      company_email: params.correo,
      status: '0'
    };
    console.log(obj);
    const body = new HttpParams({
      fromObject: obj
    });
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });
    const options = { headers: headers };

    return this.http.post(AppSettings.BASE_PATH + AppSettings.CREATE_PROVIDER, body, options);
  }

  resetPassword(params) {
    const obj = {email: params.email}
    const body = new HttpParams({
      fromObject: obj
    });
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    }); 
    const options = { headers: headers };
    
  	return this.http.post(AppSettings.BASE_PATH + AppSettings.GUEST_RESET_PASSWORD, body, options);
  }

  postSaveImageUser(image) {
    const formData = new FormData();
    formData.append("image", image);
    const headers = new HttpHeaders({});

    const options = { headers: headers };
    return this.http.post(AppSettings.BASE_IMAGE, formData, options);
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

  getOneBudget(budgetID: string){
    var form = new FormData();
    form.append("id", budgetID);

    var header = this.generalS.getToken({}, "application/x-www-form-urlencoded");
    return this.http.post(AppSettings.BASE_PATH + AppSettings.PROVIDER_GET_BUDGET, form, header);
  }

  scoreOfProvider(params){
    const body = new HttpParams({
      fromObject: params
    });
    var header = this.generalS.getToken();
    return this.http.post(AppSettings.BASE_PATH + AppSettings.PROVIDER_SCORE, body, header);
  }

  scoreOfClient(params){
    const body = new HttpParams({
      fromObject: params
    });
    var header = this.generalS.getToken();
    return this.http.post(AppSettings.BASE_PATH + AppSettings.CLIENT_SCORE, body, header);
  }

  executeBudget(budgetID: string){
    var form = new FormData();
    form.append("id", budgetID);

    var header = this.generalS.getToken({}, "application/x-www-form-urlencoded");
    return this.http.post(AppSettings.BASE_PATH + AppSettings.CLIENT_EXECUTE_BUDGET, form, header);
  }

  updateBudgetChat(chatID: string, budgetID: string){
    var form = new FormData();
      form.append("id", budgetID);
      form.append("firebase_id", chatID);

    var header = this.generalS.getToken({}, "application/x-www-form-urlencoded");
    return this.http.post(AppSettings.BASE_PATH + AppSettings.UPDATE_PROVIDER_BUDGET, form, header);
  }

  sendNotification(params) {
    console.log(params);
    const body = new HttpParams({
      fromObject: params
    });
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    }); 
    const options = { headers: headers };
    //var header = this.generalS.getToken({}, "application/x-www-form-urlencoded");
  	return this.http.post(AppSettings.BASE_PATH + AppSettings.SEND_NOTIFICATION, body, options);
  }

  convertImage(imgName: string){
    var form = new FormData();
      form.append("image", imgName);

    var header = this.generalS.getToken({}, "application/x-www-form-urlencoded");

    return this.http.post(AppSettings.BASE_PATH + AppSettings.CONVERT_IMG, form, header);
  }

  updateBudgetInfo(params: any,  specificDate: string){
    const obj = {
        id: params.id,
        price: params.price,
        date_service: specificDate
      };

    /*const body = new HttpParams({
      fromObject: obj
    });*/
    var header = this.generalS.getToken({}, "application/x-www-form-urlencoded");
    return this.http.post(AppSettings.BASE_PATH + AppSettings.UPDATE_PROVIDER_BUDGET, obj, header);
  }

  updateBudgetProvider(params: any){
    const obj = {
        id: params.id,
        user_provider_id: params.user_provider_id
      };

    /*const body = new HttpParams({
      fromObject: obj
    });*/
    var header = this.generalS.getToken({}, "application/x-www-form-urlencoded");
    return this.http.post(AppSettings.BASE_PATH + AppSettings.UPDATE_PROVIDER_BUDGET, obj, header);
  }

  updateStatus(option: string, budgetID: string) {
    let obj = {
        budget_id: budgetID,
        status_id: option
      };

    const body = new HttpParams({
      fromObject: obj
    });
    var header = this.generalS.getToken({}, "application/x-www-form-urlencoded");
    return this.http.post(AppSettings.BASE_PATH + AppSettings.UPDATE_ESTATUS_BUDGET, body, header);
  }

  createCardBank(params) {
    const body = new HttpParams({
      fromObject: params
    });
    var header = this.generalS.getToken({}, "application/json");
    return this.http.post(AppSettings.BASE_PATH + AppSettings.CREATE_CARD_BANK, body, header);
  }

  deleteCardBank(cardID: string){
    var form = new FormData();
    form.append("id", cardID);

    /*const body = new HttpParams({
      fromObject: obj
    });*/
    var header = this.generalS.getToken({}, "application/x-www-form-urlencoded");
    return this.http.post(AppSettings.BASE_PATH + AppSettings.DELETE_CARD_BANK, form, header);
  }

  getCardBank() {
    // const body = new HttpParams({
    //   fromObject: params
    // });
    var header = this.generalS.getToken({}, "application/json");
    return this.http.post(AppSettings.BASE_PATH + AppSettings.LIST_ALL_CARD, null, header);
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
