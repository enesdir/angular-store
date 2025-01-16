import { NgClass, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronRightSolid, heroXMarkSolid } from '@ng-icons/heroicons/solid';

import { GalleryService } from '@/landing/services/gallery.service';
import { ProductImageGalleryComponent } from '../product-image-gallery/product-image-gallery.component';

@Component({
	selector: 'app-product-images',
	templateUrl: './product-images.component.html',
	imports: [NgFor, NgIf, NgClass, NgOptimizedImage, ProductImageGalleryComponent, NgIconComponent],
	viewProviders: [
		provideIcons({
			heroChevronRightSolid,
			heroXMarkSolid,
		}),
	],
})
export class ProductImagesComponent {
	@Input() images: string[] = [];

	isGalleryOn: boolean = false;

	constructor(public galleryService: GalleryService) {
		this.galleryService.setMenuData(this.images.length);
	}
	closeGallery() {
		this.isGalleryOn = false;
	}
}
