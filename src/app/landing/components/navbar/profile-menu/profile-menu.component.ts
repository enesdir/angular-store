import { NgClass, NgFor, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { userProfileMenuData } from '@/landing/mocks/userProfileData';
import { UserProfileMenu } from '@/landing/models/userProfile';
import { ClickOutsideDirective } from '@/shared/directives/click-outside.directive';

@Component({
	selector: 'app-profile-menu',
	templateUrl: './profile-menu.component.html',
	standalone: true,
	imports: [ClickOutsideDirective, NgClass, RouterLink, NgOptimizedImage, NgFor],
})
export class ProfileMenuComponent {
	public isMenuOpen = false;
	userData: UserProfileMenu;

	constructor() {
		this.userData = userProfileMenuData;
	}

	public toggleMenu(): void {
		this.isMenuOpen = !this.isMenuOpen;
	}
}
