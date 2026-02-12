import { Injectable } from '@angular/core';
import { FormSchema, ValidationRule } from '../models/form-schema-model';
import { FormControl, FormGroup, Validators, ValidatorFn  } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {
  
  buildForm(schema: FormSchema): FormGroup {
    const group: any = {};

    schema.sections.forEach(section => {
      
      section.fields.forEach(field => {

        const validators = this.mapValidators(field.validations);

        group[field.key] = new FormControl<string>(
        '',
        { validators }
      );

      });

    });

    return new FormGroup(group);
  }

  private mapValidators(rules?: ValidationRule[]): ValidatorFn[] {
    if (!rules) return [];

    const validators: ValidatorFn[] = [];

    rules.forEach(rule => {
    switch (rule.type) {
      case 'required':
        validators.push(Validators.required);
        break;

      case 'minLength':
        validators.push(Validators.minLength(rule.value));
        break;

      case 'maxLength':
        validators.push(Validators.maxLength(rule.value));
        break;

      case 'min':
        validators.push(Validators.min(rule.value));
        break;

      case 'max':
        validators.push(Validators.max(rule.value));
        break;

      case 'pattern':
        validators.push(Validators.pattern(rule.value));
        break;
    }
  });

  return validators;

  }
}
