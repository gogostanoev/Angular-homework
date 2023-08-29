import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/interfaces/product.interface';
import { PRODUCTS_DATA } from 'src/app/mock-data/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  products: Product[] = PRODUCTS_DATA;
  productsSubject: BehaviorSubject<Product[]> = new BehaviorSubject(this.products);
  orderedProducts: BehaviorSubject<Product[]> = new BehaviorSubject([] as Product[]);


  stockProducts(product: Product) {
    if (product.stock === 0) return;

    const updatedOrderedProducts = this.productsSubject.getValue().map((existingProduct) => {
      // console.log('Existing product id:', existingProduct.id);
      if(product.id === existingProduct.id) {
        return {
          ...existingProduct,
          stock: existingProduct.stock - 1,
        }
      }
      
      return existingProduct;
    });

    this.productsSubject.next(updatedOrderedProducts);
  };

  getOrderedProducts(product: Product) {
    let currentValueProduct = this.orderedProducts.getValue();
    const quantityChecker = currentValueProduct.find(productQuantity => product.id === productQuantity.id);

    if(!quantityChecker) {
      const updatedQuantity = [...currentValueProduct, {
        ...product,
        quantity: 1,
        totalPrice: product.price
      }]

      this.orderedProducts.next(updatedQuantity);
    } else {

      if(product.stock === 0) return;
      currentValueProduct = currentValueProduct.map((productValue) => {

        if(product.id === productValue.id) {
          return {
            ...productValue,
            quantity: productValue.quantity + 1,
            totalPrice: (productValue.quantity + 1) * productValue.price
          };
        }

        return productValue;
      });

      this.orderedProducts.next(currentValueProduct);
    }
  }
};
