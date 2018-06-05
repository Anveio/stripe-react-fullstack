import { Product, Course, TextForms } from 'types';
import { UPDATE_FIELD_TEXT, RESET_FORM } from '../constants';

export type FormPayload = Product | Course;

export interface FormUpdate<T extends FormPayload> {
  type: UPDATE_FIELD_TEXT;
  form: keyof TextForms;
  key: keyof T;
  value: string;
}

export interface FormReset {
  type: RESET_FORM;
  form: keyof TextForms;
}

export type FormAction<T extends FormPayload> = FormUpdate<T> | FormReset;

export const changeFormText = <T extends FormPayload>(
  form: keyof TextForms,
  key: keyof T,
  value: string
): FormUpdate<T> => ({
  type: UPDATE_FIELD_TEXT,
  form,
  key,
  value
});

export const resetForm = (form: keyof TextForms): FormReset => ({
  type: RESET_FORM,
  form
});
