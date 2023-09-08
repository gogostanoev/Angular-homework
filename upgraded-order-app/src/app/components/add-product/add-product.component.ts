// Upgrade the order app
// The homework should be an addition to the previous homework, thus you shouldn't create a new application but work on the one from the previous homework. Create a new component named add-product The add product should contain a reactive form with the following input fields:

// name description price category stock

// The id should be populated automatically based on id of the latest product added in the db (orders array). Let's say the id of the latest product is 20, so the next product should automatically get 21 as an id.
// All of the fields should be inputs of the relevant type (text, number, textarea etc.)
// The types of the fields should match the data types of the Product interface
// All of the fields are required and should be populated by the user before submitting the product
// Make sure that the user won't be able to submit the form until it contains all the necessary data
// Make sure that the description is no longer than 100 characters
// Make sure that the user will enter ONLY a category that is supported (Books, Clothing, Sports and Electronics)


import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from '../services/products.service';
import { Category } from 'src/app/interfaces/category.enum';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(private readonly productsService: ProductsService) {}

  productForm: FormGroup;
  addProduct: Product[] = [];
  successMessage: string | null = null;

  ngOnInit(): void {
    this.initForm()

    this.productsService.productsSubject.subscribe({
      next: (data) => {
        this.addProduct = data;
      },

      error: (error) => {
        console.log('An error occured: ', error);
      }
    })
  };

  initForm(): void {
    this.productForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
      price: new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]),
      category: new FormControl('', [Validators.required, this.categoryValidator]),
      stock: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]\d*$/)])
    })
  };

  onProductSubmit = () => {
    const product: Product = {
      id: this.addProduct.length + 1,
      name: this.productForm.get('name')?.value,
      description: this.productForm.get('description')?.value,
      price: parseFloat(this.productForm.get('price')?.value),
      category: this.productForm.get('category')?.value,
      stock: parseFloat(this.productForm.get('stock')?.value),
      quantity: 0,
      totalPrice: 0
    }

    this.addNewProduct(product);
    this.successMessage = 'Product added successfully!';
  };

  addNewProduct(product: Product) {
    this.productsService.productsSubject.next([...this.addProduct, product]);
    console.log(this.productForm);
  };

  validCategories = [
    Category.ELECTRONICS.toLowerCase(),
    Category.CLOTHING.toLowerCase(),
    Category.BOOKS.toLowerCase(),
    Category.SPORTS.toLowerCase()
  ];

  categoryValidator = (control: FormControl): {[key: string]: boolean} | null => {
    const enteredCategory = control.value.toLowerCase();

    if (!this.validCategories.includes(enteredCategory)) {
      return { invalidCategory: true }
    }

    return null;
  };

  areAllFieldsFilled(): boolean {
    const controls = this.productForm.controls;
    // console.log(controls)
    // console.log(Object.keys(controls))
    return Object.keys(controls).every(controlName => !!controls[controlName].value);
  }
};
