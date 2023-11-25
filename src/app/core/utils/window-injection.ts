import { inject, InjectionToken, PLATFORM_ID } from '@angular/core';

export const WINDOW = new InjectionToken<Window>('The window object', {
	providedIn: 'root',
	factory: () => {
		return inject(PLATFORM_ID) === 'browser' ? window : ({} as Window);
	},
});
