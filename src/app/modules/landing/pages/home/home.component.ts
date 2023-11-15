import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from '../../components/products/product-list/product-list.component';
import { ProductsHeaderComponent } from '../../components/products/products-header/products-header.component';
import { NgFor } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Products } from '../../models/products';
import { Product } from '../../models/product';
import { PaginationComponent } from 'src/app/shared/components/pagination/pagination.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [NgFor, ProductsHeaderComponent, ProductListComponent, PaginationComponent],
})
export class HomeComponent implements OnInit {
  loading: boolean = true;
  products: Product[] = [];
  currentPage: number = 1;
  totalPages: number = 0;
  totalResults: number = 0;
  itemsPerPage: number = 10;

  constructor(private productsService: ProductsService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Fetch products when the component initializes
    this.route.queryParams.subscribe((params: Params) => {
      this.currentPage = +params['page'] || 1; // Get pagination data from URL
      this.getProducts();
    });
  }

  getProducts() {
    this.productsService.getProducts(this.currentPage, this.itemsPerPage).subscribe((data: Products) => {
      this.products = data.products;
      this.totalResults = data.total;
      this.totalPages = Math.ceil(this.totalResults / this.itemsPerPage);
      this.loading = false; // Set loading to false when products are fetched
    });
  }

  onPageChange(newPage: number) {
    this.currentPage = newPage;
    this.router.navigate(['/'], {
      queryParams: { page: this.currentPage },
    });
    this.getProducts();
  }
}
