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

import { podcastPlayerData } from '@/dashboard/mocks/podcastPlayerData';
import { PodcastPlayer } from '@/dashboard/models/podcastPlayer';

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
	playerData: PodcastPlayer;

	constructor() {
		this.playerData = podcastPlayerData;
	}
}
