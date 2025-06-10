import { Component } from '@angular/core';
import { EnrollFormComponent } from '../app-enroll-form-component/app-enroll-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fusion-scm',
  imports: [CommonModule, EnrollFormComponent],
  templateUrl: './fusion-scm.component.html',
  styleUrl: './fusion-scm.component.css'
})
export class FusionScmComponent {
  showEnrollForm = false;
  openEnrollPopup(){
}
}