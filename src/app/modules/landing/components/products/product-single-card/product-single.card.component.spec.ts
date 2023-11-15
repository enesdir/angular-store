import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSingleCardComponent } from './product-single-card.component';

describe('ProductSingleCardComponent', () => {
	let component: ProductSingleCardComponent;
	let fixture: ComponentFixture<ProductSingleCardComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ProductSingleCardComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ProductSingleCardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
