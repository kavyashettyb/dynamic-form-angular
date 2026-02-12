import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FieldSchema } from '../../models/form-schema-model';
import { CommonModule } from '@angular/common';
import { NumberField } from '../form-types/number-field';
import { ControlContainer, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { TextField } from '../form-types/text-field';
import { DateField } from '../form-types/date-field';
import { SelectField } from '../form-types/select-field';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NumberField, TextField, SelectField,
  DateField],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ],
  templateUrl: './form-field.html',
  styleUrl: './form-field.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormField {

  @Input() field!: FieldSchema;

}
