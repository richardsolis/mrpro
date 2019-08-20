import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../app.settings';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http: HttpClient,) { }

  guestGetProviders(params){
  	const body = JSON.stringify(params);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    }); 
    const options = { headers: headers };
    
  	return this.http.post(AppSettings.BASE_PATH + AppSettings.GUEST_GET_PROVIDERS, body, options);
  }
}
