// Exercise: Refactor of car renting app
// Description
// You will have to refactor the previous homework, the car renting app.

// Requirements
// Instead of using @Input and @Output decorators on properties for data sharing create a CarRentingService

// In this service you will have the hardcoded data containing the list of cars.

// The service should contain the logic for renting or returning the car.

// The service should contain the methods for filtering by renting status

// Inject the service in the components that is needed, and use the service instead of using @Input @Output for data menagement.

// Note
// When Reset (reseting filters) button is clicked, you should return all the cars no matter if they are rented or not. Use the code from class as guide and inspiration

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
