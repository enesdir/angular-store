import { DOCUMENT, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';

import { translations } from '~/src/locale/translations';
import { HeaderService } from '@/core/services/header.service';
import { ThemeService } from '@/core/services/theme.service';
import { ResponsiveHelperComponent } from './shared/components/responsive-helper/responsive-helper.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	imports: [NgClass, RouterOutlet, ResponsiveHelperComponent],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
	private readonly document = inject(DOCUMENT);
	private readonly router = inject(Router);
	private readonly titleService = inject(Title);
	private readonly headerService = inject(HeaderService);
	private readonly destroyRef = inject(DestroyRef);
	constructor(public themeService: ThemeService) {}

	ngOnInit() {
		this.setMetaTags();
		this.subscribeRouteEvents();
	}

	private setMetaTags() {
		this.titleService.setTitle(translations.title);
	}

	private subscribeRouteEvents() {
		this.router.events
			.pipe(
				takeUntilDestroyed(this.destroyRef),
				filter((event): event is NavigationEnd => event instanceof NavigationEnd),
				map((event) => event.urlAfterRedirects)
			)
			.subscribe((url) => {
				this.updateCanonicalLink(url);
			});
	}

	private updateCanonicalLink(absoluteUrl: string) {
		this.headerService.setCanonical(absoluteUrl);
	}
}
