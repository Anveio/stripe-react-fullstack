import * as constants from '../constants';

export type FormTypes = Product | Course;

export interface FormUpdate<T extends FormTypes> {
  type: constants.UPDATE_FIELD_TEXT;
  form: keyof AppForms;
  key: keyof T;
  value: string;
}

export interface FormSubmit<T extends FormTypes> {
  type: constants.SUBMIT_FORM;
  form: keyof AppForms;
  payload: T;
}

export interface FormReset<T extends FormTypes> {
  type: constants.RESET_TEXT_FIELD;
  form: keyof AppForms;
  key: keyof T;
}

export type FormAction<T extends FormTypes> =
  | FormUpdate<T>
  | FormReset<T>
  | FormSubmit<T>;

export function submitForm<T extends FormTypes>(
  form: keyof AppForms,
  payload: T
): FormSubmit<T> {
  return {
    type: constants.SUBMIT_FORM,
    form,
    payload
  };
}

export function changeFormText<T extends FormTypes>(
  form: keyof AppForms,
  key: keyof T,
  value: string
): FormUpdate<T> {
  return {
    type: constants.UPDATE_FIELD_TEXT,
    form,
    key,
    value
  };
}

export function resetFormText<T extends FormTypes>(
  form: keyof AppForms,
  key: keyof T
): FormReset<T> {
  return {
    type: constants.RESET_TEXT_FIELD,
    form,
    key
  };
}
