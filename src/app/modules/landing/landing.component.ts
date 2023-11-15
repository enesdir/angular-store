import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	standalone: true,
	imports: [RouterOutlet],
})
export class LandingComponent {
	constructor() {}
}
