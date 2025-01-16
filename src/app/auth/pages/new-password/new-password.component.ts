import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroEye, heroEyeSlash } from '@ng-icons/heroicons/outline';

@Component({
	selector: 'app-new-password',
	templateUrl: './new-password.component.html',
	imports: [NgIconComponent, FormsModule, RouterLink],
	viewProviders: [provideIcons({ heroEyeSlash, heroEye })],
})
export default class NewPasswordComponent {
	constructor() {}
}
