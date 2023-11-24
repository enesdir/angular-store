import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowSmallRight } from '@ng-icons/heroicons/outline';

import { Nft } from '@/dashboard/models/nft';

@Component({
	selector: 'dash-nft-auctions-table-item',
	templateUrl: './nft-auctions-table-item.component.html',
	standalone: true,
	imports: [NgIconComponent, NgOptimizedImage, CurrencyPipe],
	viewProviders: [
		provideIcons({
			heroArrowSmallRight,
		}),
	],
})
export class NftAuctionsTableItemComponent {
	@Input() auction = <Nft>{};

	constructor() {}
}
