import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronRightSolid } from '@ng-icons/heroicons/solid';
import { Observable } from 'rxjs';

import { CategoryService } from '@/landing/services/category.service';
import { ProductsService } from '@/landing/services/products.service';
import { ChipComponent } from '@/shared/components/chip/chip.component';
import { LoadingComponent } from '@/shared/components/loading/loading.component';

import type { Category } from '~/src/app/dashboard/models/category';

@Component({
	selector: 'dash-category-filter',
	templateUrl: './category-filter.component.html',
	standalone: true,
	imports: [NgIconComponent, NgIf, NgFor, ChipComponent, AsyncPipe, LoadingComponent, FormsModule],
	viewProviders: [
		provideIcons({
			heroChevronRightSolid,
		}),
	],
})
export class CategoryFilterComponent implements OnInit {
	categories$!: Observable<Category[]>;
	constructor(
		private categoryService: CategoryService,
		private productsService: ProductsService
	) {}

	ngOnInit(): void {
		this.categories$ = this.categoryService.getCategories();
	}

	public get category() {
		return this.productsService.category();
	}
	public set category(value: string) {
		this.productsService.updateCategory(value);
	}
}
