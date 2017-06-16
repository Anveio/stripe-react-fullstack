import * as constants from '../constants';

export interface FormUpdate {
  type: constants.UPDATE_TEXT_FIELD;
  key: string;
  value: string;
}

export interface FormSubmit {
  type: constants.SUBMIT_FORM;
  key: string;
  value: Course;
}

export interface FormReset {
  type: constants.RESET_TEXT_FIELD;
  value: string;
}

export type FormAction = FormUpdate | FormReset | FormSubmit;

export function changeFormText(value: string, key: string): FormUpdate {
  return {
    type: constants.UPDATE_TEXT_FIELD,
    key,
    value
  };
}

export function submitCourse(course: Course): FormSubmit {
  return {
    type: constants.SUBMIT_FORM,
    key: 'course',
    value: {
      name: course.name
    }
  };
}

export function resetFormText(): FormReset {
  return {
    type: constants.RESET_TEXT_FIELD,
    value: ''
  };
}