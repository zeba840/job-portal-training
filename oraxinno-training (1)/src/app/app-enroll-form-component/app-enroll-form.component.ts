import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-enroll-form',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app-enroll-form.component.html',
  styleUrls: ['./app-enroll-form.component.css']
})
export class EnrollFormComponent {
  @Input() course: string = '';
  @Output() closeForm = new EventEmitter<void>();

  formData = {
    name: '',
    email: '',
    phone: '',
    mode: '',
    message: '',
    startDate: '' // ✅ new field
  };


  constructor(private http: HttpClient) {}

  submitForm() {
    const payload = {
      ...this.formData,
      course: this.course
    };

    const url = 'https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZiMDYzNTA0MzQ1MjY4NTUzNzUxMzIi_pc';

    this.http.post(url, payload).subscribe({
      next: () => {
        alert('Thank you! Your enrollment has been submitted.');
        this.closeForm.emit();
      },
      error: (err) => {
        alert('Something went wrong. Please try again later.');
        console.error('Enrollment Error:', err);
      }
    });
  }
}
