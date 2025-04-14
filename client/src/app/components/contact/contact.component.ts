import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;

  submitting: boolean = false;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: [''],
      message: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) return;

    const formValues = this.contactForm.value;
    const formData = new FormData();

    for (let key in formValues) {
      if (formValues[key]) {
        formData.append(key, formValues[key]);
      }
    }
    
    this.sendFormData(formData);
  }

  sendFormData(formData: FormData): void {
    this.submitting = true;
    const apiUrl = 'http://localhost:5000/contact';
    
    this.http.post(apiUrl, formData).pipe(
      map(response => {
        console.log('Form submitted successfully!', response);
        return response;
      }),
      catchError(error => {
        console.error('Error submitting form', error);
        alert('Oops! Something went wrong. Please try again or send the message directly to zeljko@crnkovic-usluge.hr');
        return of('Error submitting form');
      })
    ).subscribe(response => {
      if (typeof response === 'object') {
        alert('Your message has been sent successfully!')
        this.contactForm.reset();
        this.submitting = false;
      }
    })
  }
}
