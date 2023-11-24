import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
	heroArrowDownTray,
	heroBell,
	heroChartPie,
	heroCog,
	heroFolder,
	heroGift,
	heroLockClosed,
	heroUsers,
} from '@ng-icons/heroicons/outline';
import { heroChevronRightSolid } from '@ng-icons/heroicons/solid';

import { SubMenuItem } from '@/core/models/menu.model';
import { MenuService } from '@/core/services/menu.service';
import { NavbarMobileSubmenuComponent } from '../navbar-mobile-submenu/navbar-mobile-submenu.component';

@Component({
	selector: 'dash-navbar-mobile-menu',
	templateUrl: './navbar-mobile-menu.component.html',
	standalone: true,
	imports: [
		NgFor,
		NgClass,
		NgIconComponent,
		NgTemplateOutlet,
		RouterLink,
		RouterLinkActive,
		NgIf,
		NavbarMobileSubmenuComponent,
	],
	viewProviders: [
		provideIcons({
			heroChartPie,
			heroLockClosed,
			heroArrowDownTray,
			heroGift,
			heroUsers,
			heroCog,
			heroBell,
			heroFolder,
			heroChevronRightSolid,
		}),
	],
})
export class NavbarMobileMenuComponent {
	constructor(public menuService: MenuService) {}

	public toggleMenu(subMenu: SubMenuItem) {
		this.menuService.toggleSubMenu(subMenu);
	}

	public closeMenu() {
		this.menuService.showMobileMenu = false;
	}
}
