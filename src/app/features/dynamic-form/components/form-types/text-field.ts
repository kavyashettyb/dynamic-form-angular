import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { FieldSchema } from '../../models/form-schema-model';

@Component({
  selector: 'app-text-field',
  imports: [CommonModule, ReactiveFormsModule],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ],

  template: `<div class="form-field">
  <label>{{ field.label }}</label>

  <input
    [formControlName]="field.key"
    type="text"
  />
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextField {

  @Input() field!: FieldSchema;

}