import { Component } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { MenuService } from '@/modules/layout/services/menu.service';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobilecomponent';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',

	standalone: true,
	imports: [AngularSvgIconModule, NavbarMenuComponent, NavbarMobileComponent],
})
export class NavbarComponent {
	constructor(private menuService: MenuService) {}

	public toggleMobileMenu(): void {
		this.menuService.showMobileMenu = true;
	}
}
