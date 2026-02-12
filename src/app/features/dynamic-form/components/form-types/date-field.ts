import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, ControlContainer, FormGroupDirective } from '@angular/forms';
import { FieldSchema } from '../../models/form-schema-model';

@Component({
  selector: 'app-date-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `<div class="form-field">
  <label>{{ field.label }}</label>

  <input
    type="date"
    [formControlName]="field.key"
  />
</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class DateField {
  @Input() field!: FieldSchema;
}