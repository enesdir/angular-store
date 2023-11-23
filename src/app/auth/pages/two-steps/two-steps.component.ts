import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-two-steps',
	templateUrl: './two-steps.component.html',
	standalone: true,
	imports: [FormsModule, RouterLink],
})
export default class TwoStepsComponent {
	constructor() {}
}
