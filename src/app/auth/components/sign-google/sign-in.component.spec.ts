import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignGoogleComponent } from './sign-google.component';

describe('SignGoogleComponent', () => {
	let component: SignGoogleComponent;
	let fixture: ComponentFixture<SignGoogleComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SignGoogleComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SignGoogleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
