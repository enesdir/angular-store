import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroPlaySolid } from '@ng-icons/heroicons/solid';
import {
	tablerArrowsShuffle,
	tablerPlayerSkipBackFilled,
	tablerPlayerSkipForwardFilled,
	tablerRepeat,
} from '@ng-icons/tabler-icons';

@Component({
	selector: 'dash-podcast-player',
	templateUrl: './podcast-player.component.html',
	standalone: true,
	imports: [NgIconComponent, NgOptimizedImage],
	viewProviders: [
		provideIcons({
			heroPlaySolid,
			tablerArrowsShuffle,
			tablerPlayerSkipBackFilled,
			tablerPlayerSkipForwardFilled,
			tablerRepeat,
		}),
	],
})
export class PodcastPlayerComponent {
	playerData = {
		name: 'Podpah',
		coverPhoto: 'https://i.scdn.co/image/ab67656300005f1fda018f5c18ecebc5d3ff3b59',
		currentEpisode: {
			title: 'Ep. 3 - Petals to the Metal',
			duration: '1:07:58',
			audioUrl: 'https://example.com/podcast/episode3.mp3',
			releaseDate: '2022-01-29',
		},
		playerInfo: { isPlaying: false, progress: '01:10', volume: 75, playbackSpeed: 1.0 },
	};
}
