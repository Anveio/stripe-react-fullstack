import * as constants from '../constants';

export interface FormUpdate {
  type: constants.UPDATE_TEXT_FIELD;
}

export type FormAction = FormUpdate;

export function addTextToForm(): FormUpdate {
  return {
    type: constants.UPDATE_TEXT_FIELD
  };
}