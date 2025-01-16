import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, InjectionToken, PLATFORM_ID } from '@angular/core';

const getStorage = (platformId: object): Storage =>
	isPlatformBrowser(platformId)
		? window.localStorage
		: ({
				length: 0,
				clear: () => {},
				getItem: () => null,
				key: () => null,
				removeItem: () => {},
				setItem: () => {},
			} as Storage);

export const LOCAL_STORAGE = new InjectionToken<Storage>('window local storage object', {
	providedIn: 'root',
	factory: () => getStorage(inject(PLATFORM_ID)),
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

	/**
	 * Clears all data from the local storage.
	 *
	 * @throws Will silently fail if an error occurs during the clearing process.
	 */
	clear(): void {
		try {
			this.storage.clear();
		} catch {
			/* Empty */
		}
	}

	/**
	 * Retrieves the name of the nth key in the storage.
	 *
	 * @param index - The index of the key to retrieve.
	 * @returns The name of the key at the specified index, or null if an error occurs.
	 */
	key = (index: number): string | null => {
		try {
			return this.storage.key(index);
		} catch (e) {
			console.error(e);
		}
		return null;
	};

	/**
	 * Retrieves the number of items stored in the storage.
	 *
	 * @returns {number} The number of items in the storage. Returns 0 if an error occurs.
	 */
	length = (): number => {
		try {
			return this.storage.length;
		} catch (e) {
			console.error(e);
		}
		return 0;
	};
}
