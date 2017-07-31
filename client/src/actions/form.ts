import * as constants from '../constants';

export type FormTypes = Product | Course;

export interface FormUpdate<T extends FormTypes> {
  type: constants.UPDATE_FIELD_TEXT;
  key: keyof T;
  value: string;
}

export interface FormSubmit<T extends FormTypes> {
  type: constants.SUBMIT_FORM;
  payload: T;
}

export interface FormReset<T extends FormTypes> {
  type: constants.RESET_TEXT_FIELD;
  key: keyof T;
}

export type FormAction<T extends FormTypes> =
  | FormUpdate<T>
  | FormReset<T>
  | FormSubmit<T>;

export function submitForm<T extends FormTypes>(payload: T): FormSubmit<T> {
  return {
    type: constants.SUBMIT_FORM,
    payload
  };
}

export function changeFormText<T extends FormTypes>(
  key: keyof T,
  value: string
): FormUpdate<T> {
  return {
    type: constants.UPDATE_FIELD_TEXT,
    key,
    value
  };
}

export function resetFormText<T extends FormTypes>(key: keyof T): FormReset<T> {
  return {
    type: constants.RESET_TEXT_FIELD,
    key
  };
}
