import { Component, DebugElement, PLATFORM_ID } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ClickOutsideDirective } from './click-outside.directive';

@Component({
	template: ` <div clickOutside (clickOutside)="onClickedOutside($event)"></div> `,
})
class TestComponent {
	// eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
	onClickedOutside(event: Event) {}
}

describe('ClickOutsideDirective', () => {
	let component: TestComponent;
	let fixture: ComponentFixture<TestComponent>;
	let divEl: DebugElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ClickOutsideDirective, TestComponent],
			providers: [{ provide: PLATFORM_ID, useValue: 'browser' }],
		});

		fixture = TestBed.createComponent(TestComponent);
		component = fixture.componentInstance;
		divEl = fixture.debugElement.query(By.css('div'));

		fixture.detectChanges();
	});

	it('should create an instance', () => {
		const directive = new ClickOutsideDirective(divEl, document, TestBed.inject(PLATFORM_ID));
		expect(directive).toBeTruthy();
	});

	it('should emit event when clicked outside', () => {
		spyOn(component, 'onClickedOutside');
		divEl.triggerEventHandler('click', null);
		expect(component.onClickedOutside).toHaveBeenCalled();
	});
});
