import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FieldSchema } from '../../models/form-schema-model';
import { ControlContainer, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-number-field',
  imports: [CommonModule, ReactiveFormsModule],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ],
  template: `<div class="form-field">
    <label>{{ field.label }}</label>
    <input type="number" [formControlName]="field.key" />
    </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NumberField {

  @Input() field!: FieldSchema;

}