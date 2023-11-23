import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';
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

@Component({
	selector: 'app-navbar-submenu',
	templateUrl: './navbar-submenu.component.html',
	standalone: true,
	imports: [NgFor, NgTemplateOutlet, RouterLinkActive, RouterLink, NgIf, NgIconComponent],
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
export class NavbarSubmenuComponent {
	@Input() public submenu = <SubMenuItem[]>{};

	constructor() {}
}
