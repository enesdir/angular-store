import { inject, Injectable, InjectionToken, PLATFORM_ID } from '@angular/core';

export const LOCAL_STORAGE = new InjectionToken<Storage>('window local storage object', {
	providedIn: 'root',
	factory: () => {
		return inject(PLATFORM_ID) === 'browser' ? window.localStorage : ({} as Storage);
	},
});

/** Store an object in local storage - handles the parsing and stringification of objects for storage. */
@Injectable({
	providedIn: 'root',
})
export class BrowserStorageService {
	storage = inject(LOCAL_STORAGE);
	/**
	 * Remove a single key
	 *
	 * @param {string} storageKey - Key we're storing under.
	 * @param {string} objectKey - Sub-object key to remove.
	 * @returns
	 */
	removeItem(key: string): void {
		try {
			this.storage.removeItem(key);
		} catch (e) {
			console.error(e);
		}
	}
	/**
	 * Get string from local storage.
	 *
	 * @param {string} storageKey - Key we're storing under.
	 */
	getItem(key: string): string | null {
		try {
			return this.storage.getItem(key) ?? null;
		} catch (e) {
			console.error(e);
		}
		return null; // Return a default value if on server-side rendering
	}
	/**
	 * Set a single string.
	 *
	 * @param {string} storageKey - Key we're storing under.
	 * @param {string} string - String to store (key => value).
	 * @returns
	 */
	setItem(key: string, value: string): void {
		try {
			this.storage.setItem(key, value);
		} catch (e) {
			console.error(e);
		}
	}
}
