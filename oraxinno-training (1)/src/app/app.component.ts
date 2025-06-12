import { Component, AfterViewInit  } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

declare var lucide: any;

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Important
  imports: [
    RouterModule, // ✅ Required for routerLink
    RouterOutlet  // ✅ Required for <router-outlet>
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
// export class AppComponent {
  
// }

export class AppComponent implements AfterViewInit {

  title = 'oraxinno-training'; // ✅ Declare the property correctly

  ngAfterViewInit(): void {
    lucide.createIcons(); // ✅ Initialize Lucide icons
  }
}
