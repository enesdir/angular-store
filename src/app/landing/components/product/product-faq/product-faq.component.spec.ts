import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFAQComponent } from './product-faq.component';

describe('ProductFAQComponent', () => {
	let component: ProductFAQComponent;
	let fixture: ComponentFixture<ProductFAQComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ProductFAQComponent],
		});
		fixture = TestBed.createComponent(ProductFAQComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
