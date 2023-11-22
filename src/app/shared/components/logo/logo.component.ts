import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
	selector: 'app-logo',
	templateUrl: './logo.component.html',
	standalone: true,
	imports: [NgOptimizedImage],
})
export class LogoComponent {
	constructor() {}
	public logoUrl = '/assets/icons/logo.png';
}
