import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  services: any[] = [{id:1, name: 'Cotización'},{id:2, name: 'Tarifado'}];

  constructor() { }

  ngOnInit() {
  }

}
