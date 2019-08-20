import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../app.settings';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {

  constructor(private http: HttpClient,) { }

  guestGetDistricts(){
  	return this.http.get(AppSettings.BASE_PATH + AppSettings.GUEST_GET_DISTRICTS);
  }
}
