import { NgClass, NgFor, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { userProfileMenuData } from '@/dashboard/mocks/userProfileData';
import { UserProfileMenu } from '@/dashboard/models/userProfile';
import { ClickOutsideDirective } from '@/shared/directives/click-outside.directive';

@Component({
	selector: 'dash-profile-menu',
	templateUrl: './profile-menu.component.html',
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
