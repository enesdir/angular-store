import { Routes } from '@angular/router';

import { NotFoundComponent } from './shared/components/not-found/not-found.component';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./landing/landing.component'),
		children: [
			{ path: '', pathMatch: 'full', loadComponent: () => import('./landing/pages/home/home.component') },
			{ path: 'search', pathMatch: 'full', loadComponent: () => import('./landing/pages/search/search.component') },
			{ path: '**', component: NotFoundComponent },
		],
	},
	{ path: '404', pathMatch: 'full', component: NotFoundComponent },
	{ path: '**', redirectTo: '404' },
];
