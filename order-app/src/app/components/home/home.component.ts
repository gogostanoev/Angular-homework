import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  welcomeMessage = 'Newly created Order App'
  nextMessage = 'Hello there! Welcome to our Order App, your one-stop solution for managing and placing orders with ease. Explore our range of products and start streamlining your ordering process today.'
}
