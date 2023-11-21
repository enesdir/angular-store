import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
	{
		path: '',
		component: LandingComponent,
		children: [
			{ path: '', pathMatch: 'full', component: HomeComponent },
			{ path: 'search', pathMatch: 'full', component: SearchComponent },
			{ path: '**', redirectTo: '404' },
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LandingRoutingModule {}
