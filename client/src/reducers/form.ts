import { FormAction, FormPayload } from '../actions/form';
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

export default (state = initialState, action: FormAction<FormPayload>): TextForms => {
  let partialState: Partial<TextForms> | undefined;
  let partialForm: Partial<FormPayload> | undefined;

  switch (action.type) {
    case UPDATE_FIELD_TEXT:
      partialForm = { ...state[action.form], [action.key]: action.value };
      partialState = {
        [action.form]: partialForm
      };
      break;
    case RESET_FIELD_TEXT:
      partialForm = { [action.key]: '' };
      partialState = {
        [action.form]: partialForm
      };
      break;
    default:
      return state;
  }

  return { ...state, ...partialState };
};
