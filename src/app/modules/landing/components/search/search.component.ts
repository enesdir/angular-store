import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
	standalone: true,
	selector: 'app-search-bar',
	template: `
		<div>
			<input placeholder="subreddit..." type="text" [formControl]="subredditFormControl" />
		</div>
	`,
	imports: [ReactiveFormsModule],
	styles: [
		`
			mat-toolbar {
				height: 80px;
			}

			mat-form-field {
				width: 100%;
				padding-top: 20px;
			}
		`,
	],
})
export class SearchBarComponent {
	@Input({ required: true }) subredditFormControl!: FormControl;
}
