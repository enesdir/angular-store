import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { SubMenuItem } from '@/core/models/menu.model';

@Component({
	selector: 'div[navbar-submenu]',
	templateUrl: './navbar-submenu.component.html',
	standalone: true,
	imports: [NgFor, NgTemplateOutlet, RouterLinkActive, RouterLink, NgIf, AngularSvgIconModule],
})
export class NavbarSubmenuComponent {
	@Input() public submenu = <SubMenuItem[]>{};

	constructor() {}
}
