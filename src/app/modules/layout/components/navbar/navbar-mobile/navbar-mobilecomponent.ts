import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { MenuService } from '../../../services/menu.service';
import { NavbarMobileMenuComponent } from './navbar-mobile-menu/navbar-mobile-menu.component';

@Component({
	selector: 'app-navbar-mobile',
	templateUrl: './navbar-mobile.component.html',
	standalone: true,
	imports: [NgClass, AngularSvgIconModule, NavbarMobileMenuComponent],
})
export class NavbarMobileComponent implements OnInit {
	constructor(public menuService: MenuService) {}

	ngOnInit(): void {}

	public toggleMobileMenu(): void {
		this.menuService.showMobileMenu = false;
	}
}
