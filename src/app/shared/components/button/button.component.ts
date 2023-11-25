import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	standalone: true,
	imports: [NgIf, NgClass],
})
export class ButtonComponent implements OnInit {
	finalStyles: string = '';

	@Output() clickEvent = new EventEmitter<any>();
	@Input() text: string = '';
	@Input() rounded: boolean = true;
	@Input() shadow: boolean = true;
	@Input() iconUrl?: string = '';
	@Input() iconStyle?: string = '';

	ngOnInit(): void {
		this.finalStyles = this.getStyles();
	}

	getStyles(): string {
		let styles =
			'flex gap-4 flex-wrap font-bold bg-[hsl(26, 100%, 55%)] text-White w-full md:w-auto justify-center px-6 py-4 flex-1 hover:opacity-40 ';
		if (this.rounded) {
			styles += ' rounded-lg ';
		}
		if (this.shadow) {
			styles += ' shadow-2xl ';
		}
		return styles;
	}

	click(func: any): void {
		this.clickEvent.emit(func);
	}
}
