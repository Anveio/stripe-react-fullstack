import * as constants from '../constants';

export interface FormUpdate<T> {
  type: constants.UPDATE_FIELD_TEXT;
  key: keyof T;
  value: string;
}

export interface FormSubmit<T> {
  type: constants.SUBMIT_FORM;
  payload: T;
}

export interface FormReset<T> {
  type: constants.RESET_TEXT_FIELD;
  key: keyof T;
}

export type FormAction<T extends Product | Course> =
  | FormUpdate<T>
  | FormReset<T>
  | FormSubmit<T>;

export function submitForm<T>(payload: T): FormSubmit<T> {
  return {
    type: constants.SUBMIT_FORM,
    payload
  };
}

export function changeFormText<T>(key: keyof T, value: string): FormUpdate<T> {
  return {
    type: constants.UPDATE_FIELD_TEXT,
    key,
    value
  };
}

export function resetFormText<T>(key: keyof T): FormReset<T> {
  return {
    type: constants.RESET_TEXT_FIELD,
    key
  };
}
