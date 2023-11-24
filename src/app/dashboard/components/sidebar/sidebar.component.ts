import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
	heroArrowRightOnRectangle,
	heroInformationCircle,
	heroMoon,
	heroSun,
	heroXMark,
} from '@ng-icons/heroicons/outline';
import { heroChevronDoubleLeftSolid } from '@ng-icons/heroicons/solid';
import packageJson from '~/package.json';
import { ThemeService } from 'src/app/core/services/theme.service';

import { MenuService } from '@/core/services/menu.service';
import { LogoComponent } from '@/shared/components/logo/logo.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';

@Component({
	selector: 'dash-sidebar',
	templateUrl: './sidebar.component.html',
	standalone: true,
	imports: [NgClass, NgIf, SidebarMenuComponent, RouterLink, LogoComponent, NgIconComponent],
	viewProviders: [
		provideIcons({
			heroSun,
			heroXMark,
			heroMoon,
			heroArrowRightOnRectangle,
			heroInformationCircle,
			heroChevronDoubleLeftSolid,
		}),
	],
})
export class SidebarComponent {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	public appJson: any = packageJson;

	constructor(
		public themeService: ThemeService,
		public menuService: MenuService
	) {}

	public toggleSidebar() {
		this.menuService.toggleSidebar();
	}

	toggleTheme() {
		this.themeService.theme = !this.themeService.isDark ? 'dark' : 'light';
	}
}
