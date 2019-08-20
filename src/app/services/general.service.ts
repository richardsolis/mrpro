import { Injectable } from "@angular/core";
import { AppSettings } from "../app.settings";
import { UserService } from "./user.service";
import { SessionService } from "./session.service";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class GeneralService {
  constructor(private sessionS: SessionService, private http: HttpClient) {}

  relogin(call, error, loading = null) {
    if (error.error.code == 401) {
      this.login(this.sessionS.getObject("access")).subscribe(response => {
        this.sessionS.setObject("answertoken", response);
        if (loading) {
          loading.hide();
        }
        call();
      });
    }
  }

  login(params) {
    const body = JSON.stringify(params);
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    const options = { headers: headers };

    return this.http.post(AppSettings.BASE_PATH + AppSettings.LOGIN_USER_EMAIL, body, options);
  }

  getToken(params = {}, contentType = "application/json") {
    return {
      headers: {
        Authorization: this.sessionS.getObject("token").token_type + " " + this.sessionS.getObject("token").access_token
      },
      params: params
    };
  }

  handleError(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage);
    return errorMessage;
  }
}
