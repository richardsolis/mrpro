import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AdministrationComponent } from './administration.component';
import { SelectProviderComponent } from './components/select-provider/select-provider.component';

const routes: Routes = [
	{
		path: 'admin',
		component: AdministrationComponent,
		children: [
			{
				path: '',
				pathMatch: 'full', 
				redirectTo: '/admin/home'
			},
			{
				path: 'home',
				component: HomeComponent
			},
			{
				path: 'select',
				component: SelectProviderComponent
			},
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
