
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/utilisateurs';

  constructor(private http: HttpClient, private router: Router) {}

 
login(email: string, password: string): Observable<any> {
  return this.http.get<any[]>(this.apiUrl).pipe(
    map(users => users.find(user => user.email === email && user.password === password)),
    map(user => {
      if (user) {
        const token = 'dummy_token_' + user.id;
        const currentUser = { ...user, token };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        return currentUser;
      }
      return null;
    })
  );
}

getCurrentUser() {
  const user = localStorage.getItem('currentUser');
  return user ? JSON.parse(user) : null;
}


  register(name: string, email: string, password: string): Observable<any> {
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password,
      token: 'dummy_token_' + Date.now(),
    };
    return this.http.post(this.apiUrl, newUser);
  }


  isAuthenticated(): boolean {
    return !!this.getCurrentUser();
  }

 
  logout(): void {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
  
   isAdmin(): boolean {
    const currentUser = this.getCurrentUser();
    return currentUser && currentUser.role === 'admin'; 
  }
}
