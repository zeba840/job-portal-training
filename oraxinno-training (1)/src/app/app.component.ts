import {
  Component,
  AfterViewInit,
  inject,
  PLATFORM_ID
} from '@angular/core';

import { RouterModule, RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

declare var lucide: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {

  title = 'oraxinno-training';

  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    // Initialize Lucide icons only in the browser
    if (isPlatformBrowser(this.platformId)) {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }
  }
}
