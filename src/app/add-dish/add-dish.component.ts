// src/app/add-dish/add-dish.component.ts
import { Component } from '@angular/core';
import { PlatService } from '../services/plat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent {
  showModal = true;
  dish = {
    name: '',
    description: '',
    price: 0,
    image: '' 
  };

  constructor(private platService: PlatService, private router: Router) {}

 
  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.dish.image = reader.result as string;
      };
      reader.readAsDataURL(file);
     
      

    
    }
  }

  
  onSubmit() {
    const platData = {
      name: this.dish.name,
      description: this.dish.description,
      price: this.dish.price,
      image: this.dish.image 
    };
  
    this.platService.addDish(platData).subscribe(
      (response) => {
        console.log('Dish added successfully', response);
        this.router.navigate(['/plats']);
      },
      (error) => {
        console.error('Error occurred during dish addition:', error);
        alert('An error occurred while adding the dish. Please try again.');
      }
    );
  }
  

 
  closeModal() {
    this.showModal = false;
  }
}
