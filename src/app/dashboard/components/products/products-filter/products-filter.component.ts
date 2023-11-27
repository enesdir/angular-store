import { Component } from '@angular/core';

import { CategoryFilterComponent } from '../category-filter/category-filter.component';

@Component({
	selector: 'dash-products-filter',
	templateUrl: 'products-filter.component.html',
	standalone: true,
	imports: [CategoryFilterComponent],
})
export class ProductsFilterComponent {}
