import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroEye, heroEyeSlash } from '@ng-icons/heroicons/outline';

import { SignGoogleComponent } from '@/auth/components/sign-google/sign-google.component';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	imports: [FormsModule, RouterLink, NgIconComponent, SignGoogleComponent],
	viewProviders: [provideIcons({ heroEyeSlash, heroEye })],
})
export default class SignUpComponent {
	constructor() {}
}
