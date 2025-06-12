import { Component, AfterViewInit } from '@angular/core';

declare var lucide: any;

@Component({
  selector: 'app-home-page',
  standalone: true, // ✅ Important
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'] // ✅ Correct property name
  })

  
export class HomePageComponent implements AfterViewInit {
  showEnrollForm: boolean = false;
  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  ngAfterViewInit(): void {
    lucide.createIcons(); // ✅ This will render icons in this component
  }
  

}
