import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ThemeService } from './core/services/theme.service';
import { ResponsiveHelperComponent } from './shared/components/responsive-helper/responsive-helper.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	imports: [NgClass, RouterOutlet, ResponsiveHelperComponent],
})
export class AppComponent {
	title = 'Angular Tailwind';

	constructor(public themeService: ThemeService) {}
}
