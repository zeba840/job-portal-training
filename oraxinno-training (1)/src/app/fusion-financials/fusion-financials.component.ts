import { Component } from '@angular/core';
import { EnrollFormComponent } from '../app-enroll-form-component/app-enroll-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fusion-financials',
  imports: [CommonModule, EnrollFormComponent],
  standalone: true,
  templateUrl: './fusion-financials.component.html',
  styleUrl: './fusion-financials.component.css'
})
export class FusionFinancialsComponent {
  showEnrollForm = false;
  openEnrollPopup(){

  }
}
