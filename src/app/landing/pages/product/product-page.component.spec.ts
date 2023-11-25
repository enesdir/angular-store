import { ComponentFixture, TestBed } from '@angular/core/testing';

import ProductPageComponent from './product.component';

describe('ProductPageComponent', () => {
	let component: ProductPageComponent;
	let fixture: ComponentFixture<ProductPageComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ProductPageComponent],
		});
		fixture = TestBed.createComponent(ProductPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
