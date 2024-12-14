import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'], // Tailwind will handle most styles
})
export class BannerComponent {
  biryaniImg = 'assets/biryani5.png'; // Update paths to match your assets folder
  vectorImg = 'assets/vector3.png';

  // Inline CSS for background image
  bgImage = {
    'background-image': `url('assets/vector3.png')`,
    'background-position': 'center',
    'background-repeat': 'no-repeat',
    'background-size': 'cover',
    height: '100%',
    width: '100%',
  };
}
