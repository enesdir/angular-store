import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroBars3 } from '@ng-icons/heroicons/outline';

import { MenuService } from '@/core/services/menu.service';
import { landingMenu } from '@/landing/constants/landingMenu';
import { LogoComponent } from '@/shared/components/logo/logo.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobile.component';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',

	standalone: true,
	imports: [NgIconComponent, NavbarMenuComponent, NavbarMobileComponent, LogoComponent],
	viewProviders: [provideIcons({ heroBars3 })],
})
export class NavbarComponent {
	constructor(private menuService: MenuService) {
		this.menuService.setMenuData(landingMenu);
	}

	public toggleMobileMenu(): void {
		this.menuService.showMobileMenu = true;
	}
}
