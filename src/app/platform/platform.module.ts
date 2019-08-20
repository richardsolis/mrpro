import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformRoutingModule } from './platform-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from "ngx-rating";
import { ModalModule } from "ngx-modal";
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, LinkedinLoginProvider } from "angular-6-social-login";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LightboxModule } from 'ngx-lightbox';

import { UserService } from '../services/user.service';
import { ProviderService } from '../services/provider.service';
import { CategoryService } from '../services/category.service';
import { GeneralService } from '../services/general.service';

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

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("632492680578542")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("106223678079-ragkiaoa6a5p2t9tje2r4u9g4kni5sa9.apps.googleusercontent.com")
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
    LightboxModule
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
    ContactComponent, ProvidersComponent, SendBudgetComponent
  ]
})
export class PlatformModule { }
