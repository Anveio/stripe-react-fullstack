import * as constants from '../constants';

export interface FormUpdate {
  type: constants.UPDATE_FIELD_TEXT;
  key: keyof Product;
  value: string;
}

export interface FormSubmit {
  type: constants.SUBMIT_FORM;
  product: Product;
}

export interface FormReset {
  type: constants.RESET_TEXT_FIELD;
  key: keyof Product;
}

export type FormAction = FormUpdate | FormReset | FormSubmit;

export function submitProduct(product: Product): FormSubmit {
  return {
    type: constants.SUBMIT_FORM,
    product
  };
}

export function changeFormText(key: keyof Product, value: string): FormUpdate {
  return {
    type: constants.UPDATE_FIELD_TEXT,
    key,
    value
  };
}

export function resetFormText(key: keyof Product): FormReset {
  return {
    type: constants.RESET_TEXT_FIELD,
    key
  };
}
