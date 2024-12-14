import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.css']
})
export class DarkModeComponent implements OnInit {
  theme: string = 'light';
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Check if the code is running in the browser
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      // Access `document` only if it's in the browser
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        this.theme = storedTheme;
        this.updateTheme();
      }
    }
  }

  toggleTheme(): void {
    if (this.isBrowser) {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
      this.updateTheme();
    }
  }

  updateTheme(): void {
    if (this.isBrowser) {
      const element = document.documentElement;
      if (this.theme === 'dark') {
        element.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        element.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }
}
