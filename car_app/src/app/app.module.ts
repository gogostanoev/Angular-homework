// PART 1
// # Rent a Car App

// ## Requirements

// ### The general objective is to create an app that displays a list of available cars for rent. Each car's information is presented within a card, and each card includes a "Rent" button.

// - In the main AppComponent, create two properties containing welcoming messages of your choice, and display these messages in the HTML template.

// - Define an Car interface containing the following properties:

//   - id: number
//   - model: string
//   - engineType: string
//   - yearOfProduction: string
//   - priceToRent: number
//   - image: string (URL of an image from the web)
//   - isRented: boolean

// - Within the AppComponent, create a hard-coded array of car objects with at least three cars.

// - Create a child component called CarsListComponent. Render this component within the AppComponent and provide the array of cars as input to the child component.

// - In the CarsListComponent, list all the cars using individual cards (you can apply styling of your choice).

// - Display a green "Available" label for cars that are not rented. For rented cars, do not show "Available" label.

// - For cars that are not rented, display a "Rent" button. When clicked, this button should set the isRented property of the car to true.

// - For rented cars, display a "Return the Car / Abort Renting" button. When clicked, this button should set the isRented property of the car to false.

// - Create an additional component called FilterOptionsComponent.

// - Render the FilterOptionsComponent at the top of the CarsListComponent.

// - The FilterOptionsComponent should include three buttons: "Show Rented," "Show Available," and "Reset."

// - Clicking the "Show Rented" button should display only the cars that are currently rented.

// - Clicking the "Show Available" button should display only the cars that are available for rent.

// - Clicking the "Reset" button should reset the filter and display all cars.



// PART 2
// Upgrade the existing car app from the previous homework by adding a new functionality - sort where the user will be able to sort cars by model property in ascending or descending order.

// You should render a label and a select input with two options (Ascending and Descending) where the user can toggle between both to sort in both directions. The Ascending option should be pre-selected.

// Implement the following requirement using pipe.


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { FilterOptionsComponent } from './components/filter-options/filter-options.component';
import { FilterSortPipe } from './pipes/filter-sort.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    FilterOptionsComponent,
    FilterSortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
