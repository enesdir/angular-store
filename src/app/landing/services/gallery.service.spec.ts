import { TestBed } from '@angular/core/testing';

import { GalleryService } from './gallery.service';

describe('GalleryService', () => {
	let service: GalleryService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(GalleryService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should select image', () => {
		service.selectImage(1);
		expect(service.selected).toEqual(1);
	});

	it('should go to previous image', () => {
		service.galleryLength = 3;
		service.selectImage(1);
		service.prevImg();
		expect(service.selected).toEqual(0);
	});

	it('should go to next image', () => {
		service.galleryLength = 3;
		service.selectImage(1);
		service.nextImg();
		expect(service.selected).toEqual(2);
	});
});
