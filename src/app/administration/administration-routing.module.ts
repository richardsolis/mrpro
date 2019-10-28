import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdministrationComponent } from './administration.component';
import { CategoryComponent } from './components/category/category.component';
import { CommissionComponent } from './components/commission/commission.component';

import { ServiceComponent } from './components/service/service.component';
import { UserComponent } from './components/user/user.component';
import { OrderComponent } from './components/order/order.component';
import { ProviderComponent } from './components/provider/provider.component';
import { AdministratorComponent } from './components/administrator/administrator.component';


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
				redirectTo: '/admin/pedido'
			},
			{
				path: 'servicio',
				component: ServiceComponent
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
				path: 'administrador',
				component: AdministratorComponent
			},
			{
				path: 'usuario',
				component: UserComponent
			},
			{
				path: 'proveedor',
				component: ProviderComponent
			},
			{
				path: 'pedido',
				component: OrderComponent
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
