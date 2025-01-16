import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
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
import { SidebarSubmenuComponent } from '../sidebar-submenu/sidebar-submenu.component';

@Component({
	selector: 'dash-sidebar-menu',
	templateUrl: './sidebar-menu.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		NgFor,
		NgClass,
		NgIconComponent,
		NgTemplateOutlet,
		RouterLink,
		RouterLinkActive,
		NgIf,
		SidebarSubmenuComponent,
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
export class SidebarMenuComponent {
	constructor(public menuService: MenuService) {}
	public toggleMenu(subMenu: SubMenuItem) {
		this.menuService.toggleSubMenu(subMenu);
	}
}
