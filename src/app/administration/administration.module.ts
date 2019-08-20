import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions, XHRBackend } from '@angular/http';

import { AdministrationRoutingModule } from './administration-routing.module';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { ProvideCreateComponent } from './components/provider/provide-create/provide-create.component';
import { ProvideListComponent } from './components/provider/provide-list/provide-list.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AdministrationComponent } from './administration.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ModalModule } from "ngx-modal";
import { SelectProviderComponent } from './components/select-provider/select-provider.component';
import { PerfilComponent } from './components/perfil/perfil.component';

@NgModule({
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    FormsModule,
    HttpModule,
    ModalModule
  ],
  declarations: [
  	UserCreateComponent, 
  	UserListComponent, 
  	ProvideCreateComponent, 
  	ProvideListComponent, 
  	LoginComponent, 
  	FooterComponent, 
  	HeaderComponent, 
  	AdministrationComponent, 
  	HomeComponent, 
  	MenuComponent, 
  	SelectProviderComponent, 
  	PerfilComponent
  ],
  providers: [
  	
  ]
})
export class AdministrationModule { }
