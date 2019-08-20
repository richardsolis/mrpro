import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'ptfm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	user:any = {};

	constructor(private session: SessionService,
		private router: Router,) { }

	ngOnInit() {
		this.user = this.session.getObject('user');
	}

	logout(){
		this.session.destroy('user');
		this.user = {};
		this.router.navigate(['/home']);
	}

}
