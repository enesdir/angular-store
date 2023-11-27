import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

import { PodcastCardBannerComponent } from '@/dashboard/components/podcast/podcast-card-banner/podcast-card-banner.component';
import { PodcastCardItemComponent } from '@/dashboard/components/podcast/podcast-card-item/podcast-card-item.component';
import { PodcastHeaderComponent } from '@/dashboard/components/podcast/podcast-header/podcast-header.component';
import { PodcastListComponent } from '@/dashboard/components/podcast/podcast-list/podcast-list.component';
import { PodcastPlayerComponent } from '@/dashboard/components/podcast/podcast-player/podcast-player.component';
import { podcastCardData } from '@/dashboard/mocks/podcastCardData';
import { PodcastCard } from '@/dashboard/models/podcastCard';

@Component({
	selector: 'dash-podcast',
	templateUrl: './podcast.component.html',
	standalone: true,
	imports: [
		PodcastHeaderComponent,
		PodcastCardBannerComponent,
		PodcastPlayerComponent,
		NgFor,
		PodcastListComponent,
		PodcastCardItemComponent,
	],
})
export default class PodcastComponent {
	listening: PodcastCard[];

	constructor() {
		this.listening = podcastCardData;
	}
}
