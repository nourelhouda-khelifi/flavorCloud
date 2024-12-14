import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  selectedImage: string = 'assets/biryani.png'; // Default image
  title: string = 'Traditional Biryani';
  description: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...';

  imageList = [
    {
      id: 1,
      img: 'assets/biryani.png',
      price: '12.99',
      tag: 'New',
      title: 'Biryani 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 2,
      img: 'assets/biryani2.png',
      price: '13.99',
      tag: 'Sale',
      title: 'Biryani2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 3,
      img: 'assets/biryani3.png',
      price: '14.99',
      tag: 'Hot',
      title: 'Biryani 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
  ];

  // Update the image, title, and description when an item is clicked
  updateImage(item: any): void {
    this.selectedImage = item.img;
    this.title = item.title;
    this.description = item.description;
  }

  // Handle the "Order Now" button click
  handleOrderPopup(): void {
    console.log('Order Now clicked!');
    // Add your logic for order popup
  }
}
