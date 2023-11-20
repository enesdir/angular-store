import { Component } from '@angular/core';

@Component({
	selector: 'app-not-found',
	templateUrl: './not-found.component.html',
	standalone: true,
})
export class NotFoundComponent {
	constructor() {
		console.log('NOT FOUND 404');
	}
}
