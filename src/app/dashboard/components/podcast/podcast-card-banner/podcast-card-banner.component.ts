import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroPlaySolid } from '@ng-icons/heroicons/solid';
import { tablerHeadphones } from '@ng-icons/tabler-icons';

@Component({
	selector: 'dash-podcast-card-banner',
	templateUrl: './podcast-card-banner.component.html',
	imports: [NgIconComponent],
	viewProviders: [provideIcons({ heroPlaySolid, tablerHeadphones })],
})
export class PodcastCardBannerComponent {}
