import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroBars3, heroBell, heroXMark } from '@ng-icons/heroicons/outline';

import { MenuService } from '@/core/services/menu.service';

@Component({
	selector: 'app-burger-button',
	templateUrl: './burger-button.component.html',

	standalone: true,
	imports: [NgClass, NgIconComponent],
	viewProviders: [provideIcons({ heroBars3, heroXMark, heroBell })],
})
export class BurgerButtonComponent {
	constructor(public menuService: MenuService) {}
}
