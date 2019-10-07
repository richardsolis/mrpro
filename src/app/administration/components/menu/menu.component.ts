import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../services/session.service';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'adm-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
	user:any = {};

  constructor(private session: SessionService,
  	private router: Router) { }

  ngOnInit() {
  	this.user = this.session.getObject('admi');
  }

  logout(){
  	this.session.destroy('admi');
  	this.router.navigate(['/adminLogin']);
  }

}
