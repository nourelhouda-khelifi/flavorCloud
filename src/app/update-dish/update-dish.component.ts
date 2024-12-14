import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatService } from '../services/plat.service';

@Component({
  selector: 'app-update-dish',
  templateUrl: './update-dish.component.html',
  styleUrls: ['./update-dish.component.css']
})
export class UpdateDishComponent implements OnInit {
  dish = {
    name: '',
    description: '',
    price: 0,
    image: ''
  };

  showModal = true; 

  constructor(
    private route: ActivatedRoute,
    private platService: PlatService,
    private router: Router
  ) {}

  ngOnInit(): void {
    
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.platService.getPlatById(id).subscribe((plat) => {
        this.dish = plat;
      });
    }
  }

  onImageChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
      reader.onload = () => {
        this.dish.image = reader.result as string;
      };
      reader.readAsDataURL(file);
     
  }

  onSubmit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.platService.updatePlat(id, this.dish).subscribe(
        (response) => {
          this.router.navigate(['/plats']); 
        },
        (error) => {
          console.error('Error occurred during dish update:', error);
          alert('An error occurred while updating the dish. Please try again.');
        }
      );
    }
  }

  cancel() {
    this.router.navigate(['/plats']);
  }
}
