import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListTableItemComponent } from './product-list-table-item.component';

describe('ProductListTableItemComponent', () => {
	let component: ProductListTableItemComponent;
	let fixture: ComponentFixture<ProductListTableItemComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ProductListTableItemComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ProductListTableItemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
