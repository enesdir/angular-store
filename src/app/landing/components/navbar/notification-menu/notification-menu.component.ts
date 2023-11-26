import { NgClass, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroBell } from '@ng-icons/heroicons/outline';

import { ClickOutsideDirective } from '@/shared/directives/click-outside.directive';

@Component({
	selector: 'app-notification-menu',
	templateUrl: './notification-menu.component.html',
	standalone: true,
	imports: [ClickOutsideDirective, NgClass, RouterLink, NgOptimizedImage, NgFor, NgIconComponent, NgIf],
	viewProviders: [provideIcons({ heroBell })],
})
export class NotificationMenuComponent {
	public isMenuOpen = false;
	notificationData = [
		{
			name: 'Awesome User',
			links: [
				{
					title: 'Notifications',
					href: '/dashboard',
				},
			],
		},
	];
	constructor() {}

	public toggleMenu(): void {
		this.isMenuOpen = !this.isMenuOpen;
	}
}
