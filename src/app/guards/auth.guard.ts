// src/app/guards/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const currentUser = this.authService.getCurrentUser();

   
    if (!currentUser) {
      alert("Vous devez être connecté pour accéder à cette page !");
      this.router.navigate(['/login']);
      return false;
    }

    
    const expectedRoles = route.data['roles'] || [route.data['role']];
    if (expectedRoles && !expectedRoles.includes(currentUser.role)) {
      alert("Vous n'avez pas accès à cette page !");
      this.router.navigate(['/home']);
      return false;
    }

    return true;
  }
}
