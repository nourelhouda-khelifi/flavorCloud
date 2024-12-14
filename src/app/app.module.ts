import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DarkModeComponent } from './dark-mode/dark-mode.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { ServicesComponent } from './services/services.component';
import { BannerComponent } from './banner/banner.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Import FontAwesome module
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'; // Import solid icons
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { AppStoreComponent } from './app-store/app-store.component';
import { TestimonialComponent } from './testimonial/testimonial.component'; // Example icon (optional)
import { SlickCarouselModule } from 'ngx-slick-carousel'; // Use the correct module name
import { InventoryComponent } from './inventory/inventory.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PlatsComponent } from './plats/plats.component';

import { FormsModule } from '@angular/forms';
import { AddDishComponent } from './add-dish/add-dish.component';
import { UpdateDishComponent } from './update-dish/update-dish.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DarkModeComponent,
    FooterComponent,
    HeroComponent,
    ServicesComponent,
    BannerComponent,
    AppStoreComponent,
    TestimonialComponent,
    InventoryComponent,
    ServicePageComponent,
    HomepageComponent,
    PlatsComponent,
    AddDishComponent,
    UpdateDishComponent,
    RegisterComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SlickCarouselModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  // Add icons to the library in the constructor
  constructor() {
    library.add(fas, faCoffee); // Add all solid icons and the coffee icon
  }
}
