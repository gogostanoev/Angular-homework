import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private readonly productsService: ProductsService
  ) {}

  products: Product[] = [];

  // ngOnInit() is neccessary for making the logic to render the wanted data
  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  onStockReducer(product: Product) {
    this.productsService.stockReducer(product);
  }
}
