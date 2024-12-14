// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    console.log('Form submitted');

    
    this.authService.login(this.email, this.password).subscribe(
      (user) => {
        if (user && user.token) {
          console.log('Login successful, redirecting...');
          this.router.navigate(['/home']); 
        } else {
          alert('Invalid credentials');
        }
      },
      (error) => {
        console.error('An error occurred during login:', error);
        alert('An error occurred. Please try again later.');
      }
    );
  }
}
