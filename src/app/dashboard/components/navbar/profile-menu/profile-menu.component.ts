import { NgClass, NgFor, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ClickOutsideDirective } from '@/shared/directives/click-outside.directive';

@Component({
	selector: 'dash-profile-menu',
	templateUrl: './profile-menu.component.html',
	standalone: true,
	imports: [ClickOutsideDirective, NgClass, RouterLink, NgOptimizedImage, NgFor],
})
export class ProfileMenuComponent {
	public isMenuOpen = false;
	userData = {
		name: 'Awesome User',
		email: 'user@awesome.com',
		userImage:
			'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		links: [
			{
				title: 'Your Profile',
				href: '#',
			},
			{
				title: 'Language',
				href: '#',
			},
			{
				title: 'Settings',
				href: '#',
			},
			{
				title: 'Sign out',
				href: '/auth',
			},
		],
	};
	constructor() {}

	public toggleMenu(): void {
		this.isMenuOpen = !this.isMenuOpen;
	}
}
