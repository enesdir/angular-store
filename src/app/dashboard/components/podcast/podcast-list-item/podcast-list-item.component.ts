import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroEllipsisHorizontalSolid, heroHeartSolid, heroPlaySolid } from '@ng-icons/heroicons/solid';

import { Podcast } from '@/dashboard/models/podcastList';

@Component({
	selector: 'dash-podcast-list-item',
	templateUrl: './podcast-list-item.component.html',
	imports: [NgIconComponent, NgOptimizedImage],
	viewProviders: [
		provideIcons({
			heroPlaySolid,
			heroEllipsisHorizontalSolid,
			heroHeartSolid,
		}),
	],
})
export class PodcastListItemComponent {
	@Input({ required: true }) podcast!: Podcast;
	@Input() index!: number;
}
