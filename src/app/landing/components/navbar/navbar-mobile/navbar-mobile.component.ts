import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroXMark } from '@ng-icons/heroicons/outline';

import { MenuService } from '@/core/services/menu.service';
import { LogoComponent } from '@/shared/components/logo/logo.component';
import { NavbarMobileMenuComponent } from './navbar-mobile-menu/navbar-mobile-menu.component';

@Component({
	selector: 'app-navbar-mobile',
	templateUrl: './navbar-mobile.component.html',
	standalone: true,
	imports: [NgClass, NgIconComponent, NavbarMobileMenuComponent, LogoComponent],
	viewProviders: [provideIcons({ heroXMark })],
})
export class NavbarMobileComponent {
	constructor(public menuService: MenuService) {}
	public toggleMobileMenu(): void {
		this.menuService.showMobileMenu = false;
	}
}
