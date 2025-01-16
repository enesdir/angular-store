import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { inject, isDevMode } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import {
	createUrlTreeFromSnapshot,
	PreloadAllModules,
	provideRouter,
	Router,
	withComponentInputBinding,
	withInMemoryScrolling,
	withPreloading,
	withRouterConfig,
	withViewTransitions,
} from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';

import { cachingInterceptor } from '@/core/interceptors/caching.interceptors';
import { routes } from './app.routes';

import type { ApplicationConfig } from '@angular/core';

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(
			routes,
			withInMemoryScrolling(),
			withViewTransitions({
				onViewTransitionCreated: ({ transition, to }) => {
					const router = inject(Router);
					const toTree = createUrlTreeFromSnapshot(to, []);
					// Skip the transition if the only thing changing is the fragment and queryParams
					if (
						router.isActive(toTree, {
							paths: 'exact',
							matrixParams: 'exact',
							fragment: 'ignored',
							queryParams: 'ignored',
						})
					) {
						transition.skipTransition();
					}
				},
			}),
			withComponentInputBinding(),
			withRouterConfig({ paramsInheritanceStrategy: 'always', onSameUrlNavigation: 'reload' }),
			withPreloading(PreloadAllModules)
		),
		provideClientHydration(),
		provideHttpClient(withFetch(), withInterceptors([cachingInterceptor])),
		provideServiceWorker('ngsw-worker.js', {
			enabled: !isDevMode(),
			registrationStrategy: 'registerWhenStable:30000',
		}),
	],
};
