import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  // Image data
  biryaniImages = [
    { id: 1, img: 'assets/biryani3.png' },
    { id: 2, img: 'assets/biryani5.png' },
    { id: 3, img: 'assets/biryani2.png' }
  ];

  // Background image
  bgImage: string = 'assets/vector3.png';

  // Selected image (default)
  selectedImage: string = this.biryaniImages[0].img;

  // Method to change the selected image
  changeImage(id: number): void {
    const selected = this.biryaniImages.find((item) => item.id === id);
    if (selected) {
      this.selectedImage = selected.img;
    }
  }
}
