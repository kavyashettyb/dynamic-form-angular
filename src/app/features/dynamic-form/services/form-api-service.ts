import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormSchema } from '../models/form-schema-model';

@Injectable({
  providedIn: 'root',
})
export class FormApiService {

   constructor(private http: HttpClient) {}

  loadForm(id: string) {
    return this.http.get<FormSchema>(
      `http://localhost:3000/forms/${id}`
    );
  }
  
}
