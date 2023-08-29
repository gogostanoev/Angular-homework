import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  firstMessage = 'Welcome to the Order App, a user-friendly platform designed to simplify the ordering experience.'
  secondMessage = 'Created with passion by Bob, this app aims to enhance the way you handle your orders.'
}
