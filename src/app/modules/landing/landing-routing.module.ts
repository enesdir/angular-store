import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
	{
		path: '',
		component: LandingComponent,
		children: [
			{ path: '', pathMatch: 'full', component: HomeComponent },
			{ path: '**', redirectTo: '404' },
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LandingRoutingModule {}
