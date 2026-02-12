import { Injectable } from '@angular/core';
import { FieldSchema } from '../models/form-schema-model';

// interface Condition {
//   dependsOn: string;
//   equals: any;
// }

@Injectable({
  providedIn: 'root',
})
export class VisibilityEngineService {
  
  isVisible(field: FieldSchema): boolean {
    return field.visibility !== false;
  }

  // evaluate(condition: Condition | undefined, formValue: any): boolean {
  //   if (!condition) return true;
  //   return formValue[condition.dependsOn] === condition.equals;
  // }
  
}
