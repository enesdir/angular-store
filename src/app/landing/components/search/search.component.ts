import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
	standalone: true,
	selector: 'app-search-bar',
	template: `
		<div class="py-2">
			<input placeholder="search..." type="text" [formControl]="searchFormControl" />
		</div>
	`,
	imports: [ReactiveFormsModule],
})
export class SearchBarComponent {
	@Input({ required: true }) searchFormControl!: FormControl;
}
