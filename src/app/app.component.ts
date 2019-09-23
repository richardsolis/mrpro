import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare let WOW: any; //declare moment

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mrpro';
  public wow;

  ngOnInit(){
    this.wow = new WOW();
    this.wow.init();
  	$(window).scroll(function() {
      if ($(this).scrollTop() > 140 ) {
          $('.scrolltop:hidden').stop(true, true).fadeIn();
          $('header .blue').addClass('menu-fixed');
      } else {
          $('.scrolltop').stop(true, true).fadeOut();
          $('header .blue').removeClass('menu-fixed');

      }
    });
  }
  top(){
    $('body,html').animate({ scrollTop : 0}, 800);
  }
}
