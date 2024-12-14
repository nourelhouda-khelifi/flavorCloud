import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footerLogo: string = '../assets/food-logo.png'; // Path to your footer logo
  year: number = new Date().getFullYear(); // Current year
}
