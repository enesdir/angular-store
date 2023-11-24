import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

import { BrowserStorageService } from './storage.service';

export type ThemePreference = 'light' | 'dark';

@Injectable({
	providedIn: 'root',
})
export class ThemeService {
	private readonly themeKey = 'preferred-theme';
	private readonly defaultTheme: ThemePreference = 'light';
	public themeChanged = signal<ThemePreference>(this.theme);

	constructor(
		@Inject(PLATFORM_ID) private platformId: object,
		private localStorageService: BrowserStorageService
	) {}

	public get theme(): ThemePreference {
		if (isPlatformBrowser(this.platformId)) {
			const storedTheme = this.localStorageService.getItem(this.themeKey) as ThemePreference;
			if (storedTheme && (storedTheme === 'light' || storedTheme === 'dark')) {
				return storedTheme;
			}
			return this.initializeThemeBasedOnSystemPreference();
		}
		return this.defaultTheme;
	}

	public set theme(theme: ThemePreference) {
		if (isPlatformBrowser(this.platformId)) {
			this.localStorageService.setItem(this.themeKey, theme);
			this.themeChanged.set(theme);
		}
	}

	private initializeThemeBasedOnSystemPreference(): ThemePreference {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return 'dark';
		} else {
			return 'light';
		}
	}
	public get isDark(): boolean {
		return this.theme == 'dark';
	}
}
