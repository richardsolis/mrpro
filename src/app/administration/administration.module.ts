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
import { PerfilComponent } from './components/perfil/perfil.component';
import { ClientComponent } from './components/client/client.component';
import { CategoryComponent } from './components/category/category.component';
import { CommissionComponent } from './components/commission/commission.component';
import { ProviderComponent } from './components/provider/provider.component';

@NgModule({
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    FormsModule,
    HttpModule,
    ModalModule
  ],
  declarations: [ 
  	LoginComponent,  
  	HeaderComponent, 
  	AdministrationComponent,
  	MenuComponent, 
  	PerfilComponent, ClientComponent, CategoryComponent, CommissionComponent, ProviderComponent
  ],
  providers: [
  	
  ]
})
export class AdministrationModule { }
