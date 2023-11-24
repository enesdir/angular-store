import { Component } from '@angular/core';

import { NftAuctionsTableComponent } from '@/dashboard/components/nft/nft-auctions-table/nft-auctions-table.component';
import { NftDualCardComponent } from '@/dashboard/components/nft/nft-dual-card/nft-dual-card.component';
import { NftHeaderComponent } from '@/dashboard/components/nft/nft-header/nft-header.component';
import { NftSingleCardComponent } from '@/dashboard/components/nft/nft-single-card/nft-single-card.component';
import { Nft } from '../../models/nft';

@Component({
	selector: 'dash-nft',
	templateUrl: './nft.component.html',
	standalone: true,
	imports: [NftHeaderComponent, NftDualCardComponent, NftSingleCardComponent, NftAuctionsTableComponent],
})
export default class NftComponent {
	nft: Array<Nft>;

	constructor() {
		this.nft = [
			{
				id: 34356771,
				title: 'Girls of the Cartoon Universe',
				creator: 'Jhon Doe',
				instant_price: 4.2,
				price: 187.47,
				ending_in: '06h 52m 47s',
				last_bid: 0.12,
				image: './assets/images/img-01.jpg',
				avatar: './assets/avatars/avt-01.png',
			},
			{
				id: 34356772,
				title: 'Pupaks',
				price: 548.79,
				last_bid: 0.35,
				image: './assets/images/img-02.jpg',
			},
			{
				id: 34356773,
				title: 'Seeing Green collection',
				price: 234.88,
				last_bid: 0.15,
				image: './assets/images/img-03.jpg',
			},
		];
	}
}
