import { CurrencyPipe, NgOptimizedImage, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Nft } from '@/dashboard/models/nft';

@Component({
	selector: 'dash-nft-dual-card',
	templateUrl: './nft-dual-card.component.html',
	standalone: true,
	imports: [NgStyle, CurrencyPipe, NgOptimizedImage],
})
export class NftDualCardComponent {
	@Input() nft: Nft = <Nft>{};

	constructor() {}
}
