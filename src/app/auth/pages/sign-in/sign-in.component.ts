import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroEye, heroEyeSlash } from '@ng-icons/heroicons/outline';

import { SignGoogleComponent } from '@/auth/components/sign-google/sign-google.component';

@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.scss'],
	imports: [FormsModule, ReactiveFormsModule, RouterLink, NgClass, NgIf, NgIconComponent, SignGoogleComponent],
	viewProviders: [provideIcons({ heroEyeSlash, heroEye })],
})
export default class SignInComponent implements OnInit {
	form!: FormGroup;
	submitted = false;
	passwordTextType!: boolean;

	constructor(
		private readonly _formBuilder: FormBuilder,
		private readonly _router: Router,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.form = this._formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', Validators.required],
		});
		this.route.data.subscribe((data) => {
			console.log(data['returnUrl']); // This will log the returnUrl
		});
	}

	get f() {
		return this.form.controls;
	}

	togglePasswordTextType() {
		this.passwordTextType = !this.passwordTextType;
	}

	onSubmit() {
		this.submitted = true;
		// eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
		const { email, password } = this.form.value;

		// stop here if form is invalid
		if (this.form.invalid) {
			return;
		}

		this._router.navigate(['/']);
	}
}
