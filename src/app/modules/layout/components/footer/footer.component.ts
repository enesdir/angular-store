import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	standalone: true,
})
export class FooterComponent implements OnInit {
	public year: number = new Date().getFullYear();

	constructor() {}

	ngOnInit(): void {}
}
