import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FieldSchema, SectionSchema } from '../../models/form-schema-model';
import { FormGroup, ControlContainer, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormField } from '../form-field/form-field';

@Component({
  selector: 'app-form-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormField],
  templateUrl: './form-section.html',
  styleUrl: './form-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormSection {

  @Input() section!: SectionSchema;

  trackByKey(_: number, field: FieldSchema) {
    return field.key;
  }

}
