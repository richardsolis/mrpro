import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';

import { PlatformRoutingModule } from './platform-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from "ngx-rating";
import { ModalModule } from "ngx-modal";
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, LinkedinLoginProvider } from "angular-6-social-login";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LightboxModule } from 'ngx-lightbox';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { UserService } from '../services/user.service';
import { ProviderService } from '../services/provider.service';
import { CategoryService } from '../services/category.service';
import { GeneralService } from '../services/general.service';
import { ChatService } from '../services/chat.service';

import { HomeComponent } from './components/home/home.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { SelectProviderComponent } from './components/select-provider/select-provider.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RegisterEmailComponent } from './components/register-email/register-email.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { SendBudgetComponent } from './components/send-budget/send-budget.component';
import { HomeProviderComponent } from './provider/home/home-provider.component';
import { ChatComponent } from './provider/components/chat/chat.component';
import { RegisterProviderComponent } from './components/register-provider/register-provider.component';
import { ProfileProviderComponent } from '../platform/provider/components/profile-provider/profile-provider.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DataTablesModule } from 'angular-datatables';
import { SafeHtml } from '../pipes/safeHtmlPipe';
import { ProfileClientComponent } from './components/profile-client/profile-client.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { StarsComponent } from './components/stars/stars.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { CreditCardDirectivesModule } from 'angular-cc-library';
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("177355466658728")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("494212167900-b4oftbu7vot06fvgri3ekt2gkpgmh2le.apps.googleusercontent.com")
        },
          {
            id: LinkedinLoginProvider.PROVIDER_ID,
            provider: new LinkedinLoginProvider("1098828800522-m2ig6bieilc3tpqvmlcpdvrpvn86q4ks.apps.googleusercontent.com")
          },
      ]
  );
  return config;
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PlatformRoutingModule,
    RatingModule,
    SocialLoginModule,
    ModalModule,
    SlickCarouselModule,
    LightboxModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,  // imports firebase/auth, only needed for auth features,
    DataTablesModule,
    AngularMultiSelectModule,
    CreditCardDirectivesModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    UserService,
    ProviderService,
    CategoryService,
    GeneralService,
    ChatService
  ],
  declarations: [
  	HomeComponent, 
  	ErrorPageComponent, 
  	HeaderComponent, 
  	FooterComponent, 
  	BannerComponent, 
    SelectProviderComponent, 
    LoginComponent, 
    RegistroComponent, 
    RegisterEmailComponent, 
    ContactComponent, ProvidersComponent, SendBudgetComponent,
    HomeProviderComponent,
    ChatComponent,
    RegisterProviderComponent,
    ProfileProviderComponent,
    ResetPasswordComponent,
    SafeHtml,
    ProfileClientComponent,
    ChangePasswordComponent,
    StarsComponent,
    ConfirmarComponent
  ]
})
export class PlatformModule { }
