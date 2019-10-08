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
import { ProviderComponent } from './components/provider/provider.component';
import { ProviderService } from '../services/provider.service';
import { GeneralService } from '../services/general.service';
import { UserService } from '../services/user.service';
import { DataTablesModule } from 'angular-datatables';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SafeHtml2 } from '../pipes/safeHtml2Pipe';

@NgModule({
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ModalModule,
    NgxSpinnerModule,
    DataTablesModule,
    SlickCarouselModule
  ],
  declarations: [ 
  	LoginComponent,  
  	HeaderComponent, 
  	AdministrationComponent,
  	MenuComponent, 
    UserComponent, 
    ServiceComponent, 
    CategoryComponent, 
    CommissionComponent, 
    OrderComponent, 
    ProviderComponent,
    SafeHtml2
  ],
  providers: [
    ProviderService,
    GeneralService,
    UserService
  ]
})
export class AdministrationModule { }
