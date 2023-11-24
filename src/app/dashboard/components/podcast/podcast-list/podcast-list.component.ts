import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

import { Podcast } from '@/dashboard/models/podcastList';
import { PodcastListItemComponent } from '../podcast-list-item/podcast-list-item.component';

@Component({
	selector: 'dash-podcast-list',
	templateUrl: './podcast-list.component.html',
	standalone: true,
	imports: [NgFor, PodcastListItemComponent],
})
export class PodcastListComponent {
	podcastList: Podcast[] = [
		{
			title: 'Nosso Quadro ao vivo em brasiliza',
			artists: ['AgroPlay', 'Ana Castela'],
			description: 'Conexões de Máfia (feat. Rich The Kid)',
			releaseDate: '4 days ago',
			duration: '3:41',
			albumCover: 'https://i.scdn.co/image/ab67616d000048519935bba90dee253e77d8f9ad',
		},
		{
			title: 'Nosso Quadro ao vivo em brasiliza',
			artists: ['AgroPlay', 'Ana Castela'],
			description: 'Conexões de Máfia (feat. Rich The Kid)',
			releaseDate: '4 days ago',
			duration: '3:41',
			albumCover: 'https://i.scdn.co/image/ab67616d000048519935bba90dee253e77d8f9ad',
		},
		{
			title: 'Nosso Quadro ao vivo em brasiliza',
			artists: ['AgroPlay', 'Ana Castela'],
			description: 'Conexões de Máfia (feat. Rich The Kid)',
			releaseDate: '4 days ago',
			duration: '3:41',
			albumCover: 'https://i.scdn.co/image/ab67616d000048519935bba90dee253e77d8f9ad',
		},
	];
}
