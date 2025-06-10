import { Component } from '@angular/core';
import { EnrollFormComponent } from '../app-enroll-form-component/app-enroll-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-oic-bi-publisher',
  imports: [CommonModule, EnrollFormComponent],
  templateUrl: './oic-bi-publisher.component.html',
  styleUrl: './oic-bi-publisher.component.css'
})
export class OicBiPublisherComponent {
  showEnrollForm = false;
  openEnrollPopup(){

  }

}
