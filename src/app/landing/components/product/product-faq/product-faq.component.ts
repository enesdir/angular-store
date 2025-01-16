import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroMinusSmallSolid, heroPlusSmallSolid } from '@ng-icons/heroicons/solid';

@Component({
	selector: 'app-product-faq',
	templateUrl: './product-faq.component.html',
	imports: [CdkAccordionModule, NgIconComponent, NgFor],
	viewProviders: [
		provideIcons({
			heroMinusSmallSolid,
			heroPlusSmallSolid,
		}),
	],
})
export class ProductFAQComponent {
	items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
	expandedIndex = 0;
}
