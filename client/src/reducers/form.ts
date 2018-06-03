import { FormAction, FormPayload } from '../actions/form';
import { UPDATE_FIELD_TEXT, RESET_FORM } from '../constants';
import { TextForms, Course, Product } from 'types';

const addCourse: Course = {
  name: ''
};

const addItem: Product = {
  category: '',
  description: '',
  imageSrc: '',
  name: '',
  price: 0
};

const initialState: TextForms = {
  addCourse,
  addItem
};

export default (
  state = initialState,
  action: FormAction<FormPayload>
): TextForms => {
  switch (action.type) {
    case UPDATE_FIELD_TEXT:
      return {
        ...state,
        [action.form]: { ...state[action.form], [action.key]: action.value }
      };
    case RESET_FORM:
      return {
        ...state,
        [action.form]: Object.keys(state[action.form]).reduce(
          (resetForm, field: keyof FormPayload) =>
            Object.assign(resetForm, { [field]: '' }),
          {}
        )
      };
    default:
      return state;
  }
};
