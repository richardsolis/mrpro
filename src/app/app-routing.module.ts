import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './platform/components/home/home.component';
import { ErrorPageComponent } from './platform/components/error-page/error-page.component';
 
const routes: Routes = [
	{
		path: '', pathMatch: 'full', redirectTo: '/home'
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
