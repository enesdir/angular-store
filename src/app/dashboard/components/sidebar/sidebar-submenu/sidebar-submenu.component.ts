import { NgClass, NgFor, NgTemplateOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronRightSolid } from '@ng-icons/heroicons/solid';
import { SubMenuItem } from 'src/app/core/models/menu.model';

import { MenuService } from '@/core/services/menu.service';

@Component({
	selector: 'dash-sidebar-submenu',
	templateUrl: './sidebar-submenu.component.html',
	imports: [NgClass, NgFor, NgTemplateOutlet, RouterLinkActive, RouterLink, NgIconComponent],
	viewProviders: [
		provideIcons({
			heroChevronRightSolid,
		}),
	],
})
export class SidebarSubmenuComponent {
	@Input() public submenu = <SubMenuItem>{};

	constructor(public menuService: MenuService) {}

	private collapse(items: Array<SubMenuItem>) {
		items.forEach((item) => {
			item.expanded = false;
			if (item.children) this.collapse(item.children);
		});
	}
}
