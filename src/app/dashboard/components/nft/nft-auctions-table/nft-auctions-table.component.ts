import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

import { nftActiveAuctionData } from '@/dashboard/mocks/nftActiveAuctionData';
import { Nft } from '@/dashboard/models/nft';
import { NftAuctionsTableItemComponent } from '../nft-auctions-table-item/nft-auctions-table-item.component';

@Component({
	selector: 'dash-nft-auctions-table',
	templateUrl: './nft-auctions-table.component.html',
	standalone: true,
	imports: [NgFor, NftAuctionsTableItemComponent],
})
export class NftAuctionsTableComponent {
	public activeAuction: Nft[] = [];

	constructor() {
		this.activeAuction = nftActiveAuctionData;
	}
}
