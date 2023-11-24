import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroBars3, heroBell, heroXMark } from '@ng-icons/heroicons/outline';

import { MenuService } from '@/core/services/menu.service';
import { LogoComponent } from '@/shared/components/logo/logo.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobilecomponent';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';

@Component({
	selector: 'dash-navbar',
	templateUrl: './navbar.component.html',
	standalone: true,

	imports: [NgClass, NgIconComponent, NavbarMenuComponent, NavbarMobileComponent, ProfileMenuComponent, LogoComponent],
	viewProviders: [provideIcons({ heroBars3, heroXMark, heroBell })],
})
export class NavbarComponent {
	constructor(public menuService: MenuService) {}
}
