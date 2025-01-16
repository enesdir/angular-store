import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
	selector: 'app-search-bar',
	templateUrl: './search-bar.component.html',
	imports: [ReactiveFormsModule],
})
export class SearchBarComponent {
	@Input({ required: true }) searchFormControl!: FormControl;
}
