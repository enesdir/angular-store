import { afterNextRender, Component } from '@angular/core';
import { Event, NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { MenuService } from '@/core/services/menu.service';
import { landingMenu } from '@/landing/constants/landingMenu';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	imports: [NavbarComponent, RouterOutlet, FooterComponent],
})
export default class LandingComponent {
	private mainContent: HTMLElement | null = null;

	constructor(
		private router: Router,
		private menuService: MenuService
	) {
		this.menuService.setMenuData(landingMenu);
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
