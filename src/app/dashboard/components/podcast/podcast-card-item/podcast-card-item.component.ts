import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroPlaySolid } from '@ng-icons/heroicons/solid';

@Component({
	selector: 'dash-podcast-card-item',
	templateUrl: './podcast-card-item.component.html',
	standalone: true,
	imports: [NgIconComponent, NgOptimizedImage],
	viewProviders: [
		provideIcons({
			heroPlaySolid,
		}),
	],
})
export class PodcastCardItemComponent {
	@Input() title: string = '';
	@Input() subtitle: string = '';
	@Input() image: string = '';
}
