import { NgClass, NgFor, NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronRightSolid, heroXMarkSolid } from '@ng-icons/heroicons/solid';
import { Subscription } from 'rxjs';

import { KeyboardEventService } from '@/core/services/keyboard-event.service';
import { GalleryService } from '@/landing/services/gallery.service';

@Component({
	selector: 'app-product-image-gallery',
	templateUrl: './product-image-gallery.component.html',
	standalone: true,
	imports: [NgFor, NgClass, NgOptimizedImage, NgIconComponent],
	viewProviders: [
		provideIcons({
			heroChevronRightSolid,
			heroXMarkSolid,
		}),
	],
})
export class ProductImageGalleryComponent implements OnInit, OnDestroy {
	private subscription!: Subscription;
	@Input() images: string[] = [];
	@Output() closeGallery = new EventEmitter<boolean>();
	constructor(
		private keyboardEventService: KeyboardEventService,
		public galleryService: GalleryService
	) {}

	ngOnInit(): void {
		this.subscription = this.keyboardEventService.keydown$.subscribe((event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				this.close();
			}
		});
	}
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
	close(): void {
		this.closeGallery.emit();
	}
}
