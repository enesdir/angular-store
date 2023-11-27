import { ComponentFixture, TestBed } from '@angular/core/testing';

import ProductsPageComponent from './products.component';

describe('ProductsPageComponent', () => {
	let component: ProductsPageComponent;
	let fixture: ComponentFixture<ProductsPageComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ProductsPageComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ProductsPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
