import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

import { podcastListData } from '@/dashboard/mocks/podcastListData';
import { Podcast } from '@/dashboard/models/podcastList';
import { PodcastListItemComponent } from '../podcast-list-item/podcast-list-item.component';

@Component({
	selector: 'dash-podcast-list',
	templateUrl: './podcast-list.component.html',
	standalone: true,
	imports: [NgFor, PodcastListItemComponent],
})
export class PodcastListComponent {
	podcastList: Podcast[];

	constructor() {
		this.podcastList = podcastListData;
	}
}
