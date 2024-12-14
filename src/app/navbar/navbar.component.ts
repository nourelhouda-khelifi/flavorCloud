import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'], // Optional if you have custom styles
})
export class NavbarComponent {
  // Path to the logo
  logo: string = '../assets/food-logo.png';
  constructor(private authService: AuthService) {}


  // Menu items
  
  // Placeholder for order button logic
  onOrderClick() {
    console.log('Order button clicked!');
  }
  onLogout(): void {
    this.authService.logout(); // Appelle la méthode logout() du service
  }
  
}