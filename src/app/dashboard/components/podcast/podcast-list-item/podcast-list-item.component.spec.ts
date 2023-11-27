import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastListItemComponent } from './podcast-list-item.component';

describe('PodcastListItemComponent', () => {
	let component: PodcastListItemComponent;
	let fixture: ComponentFixture<PodcastListItemComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PodcastListItemComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PodcastListItemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
