import { Component } from '@angular/core';

@Component({
	selector: 'dash-footer',
	templateUrl: './footer.component.html',
	standalone: true,
})
export class FooterComponent {
	public year: number = new Date().getFullYear();
}
