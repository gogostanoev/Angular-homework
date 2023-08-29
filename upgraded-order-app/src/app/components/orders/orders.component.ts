// Order App Homework
// Refactoring
// In this part of the assignment, you will refactor the existing Order app from the previous class. The main goal is to enhance the codebase by implementing Observables for managing mock data.

// Observable Mock Data Handling: Modify the service responsible for managing mock data to utilize Observables. You can choose either the Subject or BehaviorSubject variant for this purpose.

// Subscription to Observables: Update the components that consume the mock data to include code that subscribes to the relevant Observable. This subscription ensures that the components are responsive to changes in the data.

// Method Adaptation: Revise the methods previously used for adding or managing mock data so that they seamlessly integrate with the newly introduced Observables.

// New Features
// In this section, you will implement new features that enhance the functionality and user experience of the app. This features will be implemented on the MyOrders component, which will represent the ordered products.

// Enhanced My Orders Component: Elevate the "My Orders" component to a higher level by implementing additional features.

// Order Representation: Choose a visually appealing format, such as cards, table views, or any suitable layout, to represent each order effectively.

// Aggregated Order Information: Implement an aggregation mechanism for displaying orders. Here's an example to guide you:

// Order: Banana

// Quantity/Units: 2
// Price per Unit: 50
// Total Price: 100
// Order: Bread

// Quantity/Units: 1
// Price per Unit: 40
// Total Price: 40
// These modifications and new features will not only enhance the app's functionality but also provide users with a more organized and comprehensive view of their orders.

// Feel free to reach out if you have any questions or need further clarification.



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
