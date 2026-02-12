import { Component } from '@angular/core';
import { FormSchema } from '../../models/form-schema-model';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormApiService } from '../../services/form-api-service';
import { FormBuilderService } from '../../services/form-builder-service';
import { CommonModule } from '@angular/common';
import { FormSection } from '../../components/form-section/form-section';
import { map, Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormSection],
  templateUrl: './dynamic-form.html',
  styleUrl: './dynamic-form.scss',
})
export class DynamicForm {

  schema$!: Observable<FormSchema>;
  form$!: Observable<FormGroup>;
  
  constructor(
    private api: FormApiService,
    private builder: FormBuilderService
  ) {}

  ngOnInit() {
    this.schema$ = this.api.loadForm('banking-form').pipe(
    shareReplay(1)
  );

  this.form$ = this.schema$.pipe(
    map((schema:FormSchema) => this.builder.buildForm(schema)),
    shareReplay(1)
  );

  }

  trackById(_: number, item: { id: string }) {
    return item.id;
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      console.log('Form submitted with value:', form.value);
    } else {
      form.markAllAsTouched();
    }
  }

}
