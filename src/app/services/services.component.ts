import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'], // Tailwind handles most styles; you can leave this empty
})
export class ServicesComponent {
  // Service data
  servicesData = [
    {
      id: 1,
      img: 'assets/biryani2.png', // Update the path based on your assets folder
      name: 'Biryani',
      description:
        'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.',
    },
    {
      id: 2,
      img: 'assets/biryani2.png',
      name: 'Chicken Curry',
      description:
        'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet',
    },
    {
      id: 3,
      img: 'assets/biryani2.png',
      name: 'Cold Coffee',
      description:
        'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet',
    },
  ];
}
