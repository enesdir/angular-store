import { Component } from '@angular/core';

import { NftAuctionsTableComponent } from '@/dashboard/components/nft/nft-auctions-table/nft-auctions-table.component';
import { NftDualCardComponent } from '@/dashboard/components/nft/nft-dual-card/nft-dual-card.component';
import { NftHeaderComponent } from '@/dashboard/components/nft/nft-header/nft-header.component';
import { NftSingleCardComponent } from '@/dashboard/components/nft/nft-single-card/nft-single-card.component';
import { nftData } from '@/dashboard/mocks/nftData';
import { Nft } from '@/dashboard/models/nft';

@Component({
	selector: 'dash-nft',
	templateUrl: './nft.component.html',
	standalone: true,
	imports: [NftHeaderComponent, NftDualCardComponent, NftSingleCardComponent, NftAuctionsTableComponent],
})
export default class NftComponent {
	nft: Array<Nft>;

	constructor() {
		this.nft = nftData;
	}
}
