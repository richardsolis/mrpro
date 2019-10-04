import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../app.settings';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient,) { }

  guestGetCategories(){
  	return this.http.get(AppSettings.BASE_PATH + AppSettings.GUEST_GET_CATEGORIES)
  }

  guestGetPrices(){
  	return this.http.get(AppSettings.BASE_PATH + AppSettings.GUEST_GET_PRICED)
  }
}
