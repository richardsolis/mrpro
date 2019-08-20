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
		path: 'registro',
		component: RegistroComponent
	},
	{
		path: 'registro/mail',
		component: RegisterEmailComponent
	},
	{
		path: 'contacto',
		component: ContactComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRoutingModule { }
