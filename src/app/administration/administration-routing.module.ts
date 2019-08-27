import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdministrationComponent } from './administration.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CategoryComponent } from './components/category/category.component';
import { CommissionComponent } from './components/commission/commission.component';
import { ClientComponent } from './components/client/client.component';
import { ProviderComponent } from './components/provider/provider.component';


const routes: Routes = [
	{
		path: 'adminLogin',
		component: LoginComponent
	},
	{
		path: 'admin',
		component: AdministrationComponent,
		children: [
			{
				path: '',
				pathMatch: 'full', 
				redirectTo: '/admin/perfil'
			},
			{
				path: 'perfil',
				component: PerfilComponent
			},
			{
				path: 'categoria',
				component: CategoryComponent
			},
			{
				path: 'comision',
				component: CommissionComponent
			},
			{
				path: 'cliente',
				component: ClientComponent
			},
			{
				path: 'proveedor',
				component: ProviderComponent
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
