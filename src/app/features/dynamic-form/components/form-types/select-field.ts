import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, ControlContainer, FormGroupDirective } from '@angular/forms';
import { FieldSchema } from '../../models/form-schema-model';

@Component({
  selector: 'app-select-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `<div class="form-field">
  <label>{{ field.label }}</label>

  <select [formControlName]="field.key">
    <option value="">-- Select --</option>
    <option *ngFor="let option of field.options" [value]="option.value">
      {{ option.label }}
    </option>
  </select>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class SelectField {
  @Input() field!: FieldSchema;
}