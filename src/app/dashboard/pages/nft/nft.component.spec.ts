import { ComponentFixture, TestBed } from '@angular/core/testing';

import NftPageComponent from './nft.component';

describe('NftPageComponent', () => {
	let component: NftPageComponent;
	let fixture: ComponentFixture<NftPageComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [NftPageComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(NftPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
