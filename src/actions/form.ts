import * as constants from '../constants';

export interface FormUpdate {
  type: constants.UPDATE_TEXT_FIELD;
  value: string;
}

export interface FormReset {
  type: constants.RESET_TEXT_FIELD;
  value: string;
}

export type FormAction = FormUpdate | FormReset;

export function changeFormText(value: string): FormUpdate {
  return {
    type: constants.UPDATE_TEXT_FIELD,
    value
  };
}

export function resetFormText(): FormReset {
  return {
    type: constants.RESET_TEXT_FIELD,
    value: ''
  };
}