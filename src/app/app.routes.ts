import { Routes } from '@angular/router';

import { NotFoundComponent } from './shared/components/not-found/not-found.component';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./landing/landing.component'),
		children: [
			{ path: '', pathMatch: 'full', loadComponent: () => import('./landing/pages/home/home.component') },
			{
				path: 'products/:productId',
				loadComponent: () => import('./landing/pages/product/product.component'),
			},
			{ path: 'search', loadComponent: () => import('./landing/pages/search/search.component') },
		],
	},
	{
		path: 'auth',
		loadComponent: () => import('./auth/auth.component'),
		children: [
			{ path: '', redirectTo: 'sign-in', pathMatch: 'full' },
			{
				path: 'sign-in',
				loadComponent: () => import('./auth/pages/sign-in/sign-in.component'),
			},
			{ path: 'sign-up', loadComponent: () => import('./auth/pages/sign-up/sign-up.component') },
			{
				path: 'forgot-password',
				loadComponent: () => import('./auth/pages/forgot-password/forgot-password.component'),
			},
			{ path: 'new-password', loadComponent: () => import('./auth/pages/new-password/new-password.component') },
			{ path: 'two-steps', loadComponent: () => import('./auth/pages/two-steps/two-steps.component') },
			{ path: '**', redirectTo: 'sign-in', pathMatch: 'full' },
		],
	},
	{
		path: 'dashboard',
		loadComponent: () => import('./dashboard/dashboard.component'),
		children: [
			{ path: '', loadComponent: () => import('./dashboard/pages/home/home.component') },
			{ path: 'products', loadComponent: () => import('./dashboard/pages/products/products.component') },
			{ path: 'nft', loadComponent: () => import('./dashboard/pages/nft/nft.component') },
			{ path: 'podcast', loadComponent: () => import('./dashboard/pages/podcast/podcast.component') },
			{ path: '**', redirectTo: 'error/404' },
		],
	},
	{ path: '404', pathMatch: 'full', component: NotFoundComponent },
	{ path: '**', redirectTo: '404' },
];
