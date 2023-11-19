import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

export interface Storage {
	getItem(key: string): string | null;
	setItem(key: string, value: string): void;
	removeItem(key: string): void;
}

/** Store an object in local storage - handles the parsing and stringification of objects for storage. */
@Injectable({
	providedIn: 'root',
})
export class BrowserStorageService implements Storage {
	constructor(@Inject(PLATFORM_ID) private platformId: object) {}
	/**
	 * Remove a single key
	 *
	 * @param {string} storageKey - Key we're storing under.
	 * @param {string} objectKey - Sub-object key to remove.
	 * @returns
	 */
	removeItem(key: string): void {
		if (!isPlatformServer(this.platformId)) {
			try {
				localStorage.removeItem(key);
			} catch (e) {
				console.error(e);
			}
		}
	}
	/**
	 * Get string from local storage.
	 *
	 * @param {string} storageKey - Key we're storing under.
	 */
	getItem(key: string): string | null {
		if (!isPlatformServer(this.platformId)) {
			try {
				return localStorage.getItem(key) ?? null;
			} catch (e) {
				console.error(e);
			}
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
		if (!isPlatformServer(this.platformId)) {
			try {
				localStorage.setItem(key, value);
			} catch (e) {
				console.error(e);
			}
		}
	}
}
