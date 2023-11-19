import { Routes } from '@angular/router';

import { NotFoundComponent } from './shared/components/not-found/not-found.component';

export const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./modules/layout/layout.module').then((m) => m.LayoutModule),
	},
	{ path: '404', pathMatch: 'full', component: NotFoundComponent },
	{ path: '**', redirectTo: '404' },
];
