import { FormAction, FormTypes } from '../actions/form';
import { UPDATE_FIELD_TEXT, RESET_FIELD_TEXT } from '../constants';

const addCourse: Course = {
  name: ''
};

const addItem: Product = {
  category: 'hi',
  description: '',
  imageSrc: '',
  name: '',
  price: 0
};

const initialState: TextForms = {
  addCourse,
  addItem
};

export default (state = initialState, action: FormAction<FormTypes>): TextForms => {
  let partialState: Partial<TextForms> | undefined;

  switch (action.type) {
    case UPDATE_FIELD_TEXT:
      partialState = {
        [action.form]: {
          [action.key]: action.value
        }
      };
      break;
    case RESET_FIELD_TEXT:
      partialState = {
        [action.form]: {
          [action.key]: ''
        }
      };
      break;
    default:
      return state;
  }

  return { ...state, ...partialState };
};
