import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Job, JobService } from '../../services/job.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-careers',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css',
  encapsulation: ViewEncapsulation.None
})
export class CareersComponent {
  jobs: Job[] = [];
  parsedJobs: any[] = [];
  jobForm: FormGroup;
  formData: FormData = new FormData();

  cvFileName: string | null = null;
  coverLetterFileName: string | null = null;

  constructor(private jobService: JobService, private http: HttpClient, private fb: FormBuilder) {
    this.jobForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      aboutMe: [''],
      social: [''],
      from: [''],
      cv: [null, Validators.required],
      coverLetter: [null],
    });
  }

  ngOnInit() {
    this.fetchJobs();
    
    this.jobForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      aboutMe: [''],
      social: [''],
      from: [''],
      cv: [null, Validators.required],
      coverLetter: [null],
    });
  }
  
  fetchJobs() {
    this.jobService.getJobs().subscribe({
      next: (data) => this.jobs = data,
      error: (err) => console.error("Error fetching jobs:", err)
    })
  }

  @Input() items: { title: string; content: string }[] = [];
  activeIndex: number | null = null;

  toggle(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  onSubmit(): void {
    if (this.jobForm.invalid) {
      return;
    }

    const formValues = this.jobForm.value;

    for (let key in formValues) {
      if (formValues[key] && key !== 'cv' && key !== 'coverLetter') {
        this.formData.append(key, formValues[key]);
      }
    }

    if (formValues.cv) {
      this.formData.append('cv', formValues.cv, formValues.cv.name);
    }

    if (formValues.coverLetter) {
      this.formData.append('cover-letter', formValues.coverLetter, formValues.coverLetter.name);
    }

    this.sendFormData(this.formData);
  }

  onFileChange(event: Event, fieldName: string): void {
    const input = event.target as HTMLInputElement;
    const file = input?.files ? input.files[0] : null;
    if (file) {
      this.jobForm.patchValue({ [fieldName]: file });

      if (fieldName === 'cv') {
        this.cvFileName = file.name;
      } else if (fieldName === 'cover-letter') {
        this.coverLetterFileName = file.name;
      }
    }
  }

  sendFormData(formData: FormData): void {
    const apiUrl = 'http://localhost:5000';

    this.http.post(apiUrl, formData).pipe(
      map(response => {
        console.log('Form submitted successfully!', response);
        return response;
      }),
      catchError(error => {
        console.error('Error submitting form!', error);
        return of('Error submitting form!');
      })
    ).subscribe(response => {
      console.log(response);
    });
  }
}
