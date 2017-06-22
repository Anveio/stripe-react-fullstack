import { FormAction } from '../actions/form';
import { UPDATE_TEXT_FIELD, RESET_TEXT_FIELD } from '../constants';

const emptyAuthForm = { text: '', error: null };

const initialState: AppForms = {
  addCourse: {
    text: ''
  },
  signup: {
    email: emptyAuthForm,
    username: emptyAuthForm,
    password: emptyAuthForm
  }
};

const formUpdateReducer = (state: AppForms = initialState, action: FormAction): AppForms => {
  let partialState: Partial<AppForms> | undefined;

  switch (action.type) {
    case UPDATE_TEXT_FIELD:
      partialState = {
        [action.key]: {
          text: action.value
        }
      }; break;
    case RESET_TEXT_FIELD:
      partialState = {
        [action.key]: {
          text: action.value
        }
      }; break;
    default: return state;
  }

  return { ...state, ...partialState };
};

export default formUpdateReducer;