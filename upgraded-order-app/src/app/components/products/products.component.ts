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

  ngOnInit(): void {
    this.productsService.productsSubject.subscribe({
      next: (data) => {
        this.products = data;
        // console.log(data);
      },
      error: (error) => {
        console.log('An error occured: ', error)
      }
    });
  }

  onStockReducer(product: Product) {
    console.log('Clicked product id:', product.id);
    this.productsService.stockProducts(product);
    this.productsService.getOrderedProducts(product);
  };
}
