import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import { SessionService } from "./services/session.service";

declare let WOW: any; //declare moment

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public removePopUpIf = false;
  public validation = false;
  constructor(private router: Router, sessionService:SessionService) {
    router.events.subscribe((val) => {
        if (sessionService.getObject('user')) {
          setTimeout(() => {
            sessionService.destroy('user');
            sessionService.destroy('token');
            router.navigateByUrl('/')
            this.removePopUpIf = true;
          }, 1200000);
        }
    });
  }
  title = 'mrpro';
  public wow;

  removePopUp() {
    this.removePopUpIf = false
  }

  ngOnInit(){
    this.wow = new WOW();
    this.wow.init();
  }
  top(){
    $('body,html').animate({ scrollTop : 0}, 800);
  }
}
