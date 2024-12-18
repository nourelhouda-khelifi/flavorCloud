import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {
  testimonialData = [
    {
      id: 1,
      name: 'Samuel',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio',
      img: 'https://picsum.photos/101/101'
    },
    {
      id: 2,
      name: 'John Doe',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio',
      img: 'https://picsum.photos/102/102'
    },
    {
      id: 3,
      name: 'Smith',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio',
      img: 'https://picsum.photos/103/103'
    }
  ];
}
