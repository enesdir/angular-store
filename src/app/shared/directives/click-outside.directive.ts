import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
	AfterViewInit,
	Directive,
	ElementRef,
	EventEmitter,
	Inject,
	OnDestroy,
	Output,
	PLATFORM_ID,
} from '@angular/core';
import { filter, fromEvent, Subscription } from 'rxjs';

@Directive({
	// eslint-disable-next-line @angular-eslint/directive-selector
	selector: '[clickOutside]',
	standalone: true,
})
export class ClickOutsideDirective implements AfterViewInit, OnDestroy {
	@Output() clickOutside = new EventEmitter<void>();

	documentClickSubscription: Subscription | undefined;
	constructor(
		private element: ElementRef,
		@Inject(DOCUMENT) private document: Document,
		@Inject(PLATFORM_ID) private platformId: object
	) {}

	ngAfterViewInit(): void {
		if (isPlatformBrowser(this.platformId)) {
			this.documentClickSubscription = fromEvent(this.document, 'click')
				.pipe(
					filter((event) => {
						return !this.isInside(event.target as HTMLElement);
					})
				)
				.subscribe(() => {
					this.clickOutside.emit();
				});
		}
	}

	ngOnDestroy(): void {
		this.documentClickSubscription?.unsubscribe();
	}

	isInside(elementToCheck: HTMLElement): boolean {
		return elementToCheck === this.element.nativeElement || this.element.nativeElement.contains(elementToCheck);
	}
}
