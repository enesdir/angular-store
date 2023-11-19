import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		loadChildren: () => import('../landing/landing.module').then((m) => m.LandingModule),
	},

	{ path: '**', redirectTo: '404' },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LayoutRoutingModule {}
