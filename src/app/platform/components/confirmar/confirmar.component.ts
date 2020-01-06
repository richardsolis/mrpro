import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css']
})
export class ConfirmarComponent implements OnInit {

  constructor(public Router:Router, private route: ActivatedRoute,private userService: UserService) { }

  ngOnInit() {
    this.route.url.subscribe(params => {
      if (params[0].path ==  "confirm-email" ) {
        this.userService.confirm({token:params[1].path}).subscribe((respons:any)=>{
          console.log(respons)
        })
      }else {
        this.userService.confirmP({token:params[1].path}).subscribe((respons:any)=>{
          console.log(respons)
        })
      }
     })
  }

}
