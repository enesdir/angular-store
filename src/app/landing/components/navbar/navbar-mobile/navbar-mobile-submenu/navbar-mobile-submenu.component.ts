import { NgClass, NgFor, NgTemplateOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronRightSolid } from '@ng-icons/heroicons/solid';
import { SubMenuItem } from 'src/app/core/models/menu.model';

import { MenuService } from '@/core/services/menu.service';

@Component({
	selector: 'app-navbar-mobile-submenu',
	templateUrl: './navbar-mobile-submenu.component.html',
	standalone: true,
	imports: [NgClass, NgFor, NgTemplateOutlet, RouterLinkActive, RouterLink, NgIconComponent],
	viewProviders: [provideIcons({ heroChevronRightSolid })],
})
export class NavbarMobileSubmenuComponent {
	@Input() public submenu = <SubMenuItem>{};

	constructor(private menuService: MenuService) {}

	public toggleMenu(menu: SubMenuItem) {
		this.menuService.toggleSubMenu(menu);
	}

	private collapse(items: Array<SubMenuItem>) {
		items.forEach((item) => {
			item.expanded = false;
			if (item.children) this.collapse(item.children);
		});
	}

	public closeMobileMenu() {
		this.menuService.showMobileMenu = false;
	}
}
