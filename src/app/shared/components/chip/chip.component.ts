import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-chip',
	templateUrl: './chip.component.html',
	standalone: true,
	imports: [NgClass],
})
export class ChipComponent {
	@Input() isActive: boolean = false;
	@Input() text: string = '';
	@Output() clickEvent = new EventEmitter<void>();

	click(): void {
		this.clickEvent.emit();
	}
}
