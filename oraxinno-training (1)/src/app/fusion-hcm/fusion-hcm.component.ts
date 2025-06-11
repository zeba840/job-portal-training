import { Component } from '@angular/core';
import { EnrollFormComponent } from '../app-enroll-form-component/app-enroll-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fusion-hcm',
  imports: [CommonModule, EnrollFormComponent],
  templateUrl: './fusion-hcm.component.html',
  styleUrl: './fusion-hcm.component.css'
})
export class FusionHcmComponent {
  showEnrollForm = false;
  openEnrollPopup(){

  }

}
