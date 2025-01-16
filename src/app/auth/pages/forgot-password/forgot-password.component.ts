import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-forgot-password',
	templateUrl: './forgot-password.component.html',
	imports: [FormsModule, RouterLink],
})
export default class ForgotPasswordComponent {
	constructor() {}
}
