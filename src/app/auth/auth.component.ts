import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import { heroBars3, heroBell, heroXMark } from '@ng-icons/heroicons/outline';

import { LogoComponent } from '@/shared/components/logo/logo.component';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	imports: [NgOptimizedImage, RouterOutlet, LogoComponent],
	viewProviders: [provideIcons({ heroBars3, heroXMark, heroBell })],
})
export default class AuthComponent {
	constructor() {}
}
