import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
  firstMessage: string = 'Welcome to our car rental app!'
  secondMessage: string = 'Here is a collection of a few of our cars.'
}
