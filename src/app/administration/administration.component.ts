import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
	user:any = {}
  constructor(private session: SessionService,) { }

  ngOnInit() {
  	this.user = this.session.getObject('user');
  }

}
