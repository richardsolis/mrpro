import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions, XHRBackend } from '@angular/http';

import { AdministrationRoutingModule } from './administration-routing.module';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { AdministrationComponent } from './administration.component';
import { MenuComponent } from './components/menu/menu.component';
import { ModalModule } from "ngx-modal";
import { UserComponent } from './components/user/user.component';
import { ServiceComponent } from './components/service/service.component';
import { CategoryComponent } from './components/category/category.component';
import { CommissionComponent } from './components/commission/commission.component';
import { OrderComponent } from './components/order/order.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    FormsModule,
    HttpModule,
    ModalModule,
    NgxSpinnerModule
  ],
  declarations: [ 
  	LoginComponent,  
  	HeaderComponent, 
  	AdministrationComponent,
  	MenuComponent, 
  	UserComponent, ServiceComponent, CategoryComponent, CommissionComponent, OrderComponent
  ],
  providers: [
  	
  ]
})
export class AdministrationModule { }
