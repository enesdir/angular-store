import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionTableComponent } from './transactions-table.component';

describe('TransactionTableComponent', () => {
	let component: TransactionTableComponent;
	let fixture: ComponentFixture<TransactionTableComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [TransactionTableComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TransactionTableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
