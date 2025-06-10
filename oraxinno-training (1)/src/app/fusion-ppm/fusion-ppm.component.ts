import { Component } from '@angular/core';
import { EnrollFormComponent } from '../app-enroll-form-component/app-enroll-form.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-fusion-ppm',
  imports: [CommonModule, EnrollFormComponent],
  templateUrl: './fusion-ppm.component.html',
  styleUrl: './fusion-ppm.component.css'
})
export class FusionPpmComponent {
  showEnrollForm = false;
  openEnrollPopup(){

  }

}
