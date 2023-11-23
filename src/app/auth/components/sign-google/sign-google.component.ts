import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
	selector: 'app-sign-google',
	templateUrl: './sign-google.component.html',
	standalone: true,
	imports: [NgOptimizedImage],
})
export class SignGoogleComponent {
	constructor() {}
}
