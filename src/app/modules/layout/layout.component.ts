import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	standalone: true,
	imports: [NavbarComponent, RouterOutlet, FooterComponent],
})
export class LayoutComponent implements OnInit {
	private mainContent: HTMLElement | null = null;

	constructor(private router: Router) {
		this.router.events.subscribe((event: Event) => {
			if (event instanceof NavigationEnd) {
				if (this.mainContent) {
					this.mainContent!.scrollTop = 0;
				}
			}
		});
	}

	ngOnInit(): void {
		this.mainContent = document.getElementById('main-content');
	}
}
