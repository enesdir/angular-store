import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Nft } from '@/dashboard/models/nft';

@Component({
	selector: 'dash-nft-single-card',
	templateUrl: './nft-single-card.component.html',
	standalone: true,
	imports: [NgOptimizedImage, CurrencyPipe],
})
export class NftSingleCardComponent {
	@Input() nft: Nft = <Nft>{};

	constructor() {}
}
