import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicePageComponent } from './service-page/service-page.component'; 
import { HomepageComponent } from './homepage/homepage.component';
import { PlatsComponent } from './plats/plats.component';

import { AddDishComponent } from './add-dish/add-dish.component';
import{UpdateDishComponent} from './update-dish/update-dish.component';import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomepageComponent  , canActivate: [AuthGuard],
    data: { roles: ['admin', 'user'] } }, // Page d'accueil
  { path: 'services', component: ServicePageComponent , canActivate: [AuthGuard],
    data: { roles: ['admin', 'user'] } },
  { path: 'plats', component: PlatsComponent  , canActivate: [AuthGuard],
    data: { roles: ['admin', 'user'] }},
  { path: 'adddish', component: AddDishComponent , canActivate: [AuthGuard],
    data: { role: 'admin' } },
  { path:  'update/:id', component: UpdateDishComponent , canActivate: [AuthGuard],
    data: { role: 'admin' } },
  { path: '', component: RegisterComponent },
  { path: 'login', component: LoginComponent }, 
  { path: '**', redirectTo: '/' } 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
