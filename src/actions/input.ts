import * as constants from '../constants';

export interface FormUpdate {
  type: constants.UPDATE_TEXT_FIELD;
  // key: string;
  value: string;
}

export interface SubmitCourse {
  
}

export type FormAction = FormUpdate;

export function changeFormText(value: string): FormUpdate {
  return {
    type: constants.UPDATE_TEXT_FIELD,
    // key,
    value
  };
}