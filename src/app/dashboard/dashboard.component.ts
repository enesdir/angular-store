import { afterNextRender, Component } from '@angular/core';
import { Event, NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { MenuService } from '@/core/services/menu.service';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { dashboardMenu } from './constants/dashboardMenu';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	standalone: true,
	imports: [SidebarComponent, NavbarComponent, RouterOutlet, FooterComponent],
})
export default class DashboardComponent {
	private mainContent: HTMLElement | null = null;

	constructor(
		private router: Router,
		public menuService: MenuService
	) {
		this.menuService.setMenuData(dashboardMenu);
		this.router.events.subscribe((event: Event) => {
			if (event instanceof NavigationEnd) {
				if (this.mainContent) {
					this.mainContent!.scrollTop = 0;
				}
			}
		});
		afterNextRender(() => {
			this.mainContent = document.getElementById('main-content');
		});
	}
}
