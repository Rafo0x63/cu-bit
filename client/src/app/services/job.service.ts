import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Job {
  id: number;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = 'http://localhost:5000/careers';

  constructor(private http: HttpClient) { }

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl);
  }

  getJob(id: string | null): Observable<Job> {
    return this.http.get<Job>(`${this.apiUrl}/${id}`);
  }
}
