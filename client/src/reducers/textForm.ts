import { FormAction } from '../actions/form';
import { UPDATE_FIELD_TEXT, RESET_TEXT_FIELD } from '../constants';

// const emptyAuthField = { text: '', error: null };

const initialState: AddCourseForm = {
  name: { text: '' }
};

export default (
  state: AddCourseForm = initialState,
  action: FormAction
): AddCourseForm => {
  let partialState: Partial<AddCourseForm> | undefined;

  switch (action.type) {
    case UPDATE_FIELD_TEXT:
      partialState = {
        [action.key]: {
          text: action.value
        }
      };
      break;
    case RESET_TEXT_FIELD:
      partialState = {
        [action.key]: {
          text: ''
        }
      };
      break;
    default:
      return state;
  }

  return { ...state, ...partialState };
};
