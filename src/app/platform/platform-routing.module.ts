import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
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
import { ProfileProviderComponent } from './provider/components/profile-provider/profile-provider.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';


const routes: Routes = [
	{
		path: 'home', 
		component: HomeComponent,
	},
	{
		path: 'reserva',
		component: SelectProviderComponent
	},
	{
		path: 'reservado',
		component: ProvidersComponent
	},
	{
		path: 'pedir-propuesta',
		component: SendBudgetComponent
	},
	{
		path: 'ingresar',
		component: LoginComponent
	},
	{
		path: 'olvidar-contrasena',
		component: ResetPasswordComponent
	},
	{
		path: 'registro',
		component: RegistroComponent
	},
	{
		path: 'registro/mail',
		component: RegisterEmailComponent
	},
	{
		path: 'registro/proveedor',
		component: RegisterProviderComponent
	},
	{
		path: 'contacto',
		component: ContactComponent
	},
	{
		path: 'proveedor/home',
		component: HomeProviderComponent
	},
	{
		path: 'proveedor/home/:status',
		component: HomeProviderComponent
	},
	{
		path: 'proveedor/chat/:id/:BudgetId',
		component: ChatComponent
	},
	{
		path: 'proveedor/perfil',
		component: ProfileProviderComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRoutingModule { }
