export interface FormSchema {
  id: string;
  sections: SectionSchema[];
}

export interface SectionSchema {
  id: string;
  title: string;
  fields: FieldSchema[];
  visibility?: boolean;
  visibleWhen?: Condition; 
}

export interface FieldSchema {
  key: string;
  label: string;
  type: 'text' | 'number' | 'date' | 'select';
  visibility?: boolean;
  options?: { label: string; value: any }[]; // For select fields
  validations?: ValidationRule[];
  visibleWhen?: Condition;
}

export interface ValidationRule {
  type: 'required' | 'minLength' | 'maxLength' | 'min' | 'max' | 'pattern';
  value?: any;
}

export interface Condition {
  dependsOn: string;
  equals: any;
}