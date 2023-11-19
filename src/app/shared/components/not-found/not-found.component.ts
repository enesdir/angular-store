import { Component } from '@angular/core';

@Component({
	selector: 'app-not-found',
	templateUrl: './not-found.component.html',
})
export class NotFoundComponent {
	constructor() {
		console.log('NOT FOUND 404');
	}
}
