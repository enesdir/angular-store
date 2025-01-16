import { isPlatformBrowser, NgClass, NgFor } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { MenuItem } from 'src/app/core/models/menu.model';

import { MenuService } from '@/core/services/menu.service';
import { NavbarSubmenuComponent } from '../navbar-submenu/navbar-submenu.component';

@Component({
	selector: 'app-navbar-menu',
	templateUrl: './navbar-menu.component.html',
	imports: [NgClass, NgFor, NavbarSubmenuComponent],
})
export class NavbarMenuComponent {
	private showMenuClass = ['scale-100', 'animate-fade-in-up', 'opacity-100', 'pointer-events-auto'];
	private hideMenuClass = ['scale-95', 'animate-fade-out-down', 'opacity-0', 'pointer-events-none'];

	@ViewChild(NavbarSubmenuComponent) submenu!: ElementRef;

	constructor(
		public menuService: MenuService,
		@Inject(PLATFORM_ID) private platformId: object
	) {}

	public toggleMenu(menu: MenuItem): void {
		menu.selected = !menu.selected;
	}

	public mouseEnter(): void {
		if (isPlatformBrowser(this.platformId)) {
			const element = this.submenu.nativeElement.children[0];
			if (element) {
				this.hideMenuClass.forEach((c) => element.classList.remove(c));
				this.showMenuClass.forEach((c) => element.classList.add(c));
			}
		}
	}

	public mouseLeave(): void {
		if (isPlatformBrowser(this.platformId)) {
			const element = this.submenu.nativeElement.children[0];
			if (element) {
				this.showMenuClass.forEach((c) => element.classList.remove(c));
				this.hideMenuClass.forEach((c) => element.classList.add(c));
			}
		}
	}
}
