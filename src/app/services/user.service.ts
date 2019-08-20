import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { AppSettings } from "../app.settings";
import { GeneralService } from "./general.service";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient, private generalS: GeneralService) {}

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
}
