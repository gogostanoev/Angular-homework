import { Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { PRODUCTS_DATA } from 'src/app/mock-data/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  private _products: Product[] = PRODUCTS_DATA;
  private stockProducts: Product[] = [];

  getProducts(): Product[] {
    return this._products;
  };

  stockReducer(product: Product) {
    if(product.stock === 0) return;
    product.stock -= 1;
    this.stockProducts.push(product);
    // console.log(product.stock)
  };

  getOrderedProducts(): Product[] {
    return this.stockProducts;
  };
};
