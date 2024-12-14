import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    name: '',
    email: '',
    password: '',
     role: 'user'
  };

  constructor(private authService: AuthService, private http: HttpClient, private router: Router) {}

  onSubmit() {
    console.log('Form submitted', this.user);

    
    if (!this.user.name || !this.user.email || !this.user.password) {
      alert('Please fill in all fields');
      return;
    }

    
    this.http.post<any>('http://localhost:3000/utilisateurs', this.user)
      .subscribe(
        (response) => {
          console.log('User registered successfully', response);
          this.router.navigate(['/login']); 
        },
        (error) => {
          console.error('Error occurred during registration:', error);
          alert('An error occurred during registration. Please try again later.');
        }
      );
  }
}
