import {
  Component,
  AfterViewInit,
  inject,
  PLATFORM_ID
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

declare var lucide: any;

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements AfterViewInit {

  showEnrollForm: boolean = false;

  private platformId = inject(PLATFORM_ID);

  scrollToSection(id: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  }

  ngAfterViewInit(): void {
    // Initialize Lucide icons only in the browser
    if (
      isPlatformBrowser(this.platformId) &&
      typeof lucide !== 'undefined'
    ) {
      lucide.createIcons();
    }
  }

}
