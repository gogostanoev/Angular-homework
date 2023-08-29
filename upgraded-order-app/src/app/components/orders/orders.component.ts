import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(
    private readonly productsService: ProductsService
  ) {};

  orderProducts: Product[] = [];

  ngOnInit(): void {
    this.productsService.orderedProducts.subscribe({
      next: (data) => {
        this.orderProducts = data;
      },

      error: (error) => {
        console.log('An error occured: ', error);
      }
    })
  };
};
