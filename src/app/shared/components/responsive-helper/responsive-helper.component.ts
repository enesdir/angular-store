import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-responsive-helper',
	templateUrl: './responsive-helper.component.html',
	imports: [NgIf],
})
export class ResponsiveHelperComponent {
	public env: typeof environment = environment;

	constructor() {}
}
