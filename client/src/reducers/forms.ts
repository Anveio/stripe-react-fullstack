import { FormAction } from '../actions/form';
import { UPDATE_FIELD_TEXT, RESET_TEXT_FIELD } from '../constants';

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

const emptyAuthForm: AuthTextField = { text: '', error: null };

const login: LoginForm = {
  email: emptyAuthForm,
  password: emptyAuthForm,
  loading: false
};

const signup: SignupForm = {
  email: emptyAuthForm,
  username: emptyAuthForm,
  password: emptyAuthForm,
  passwordConf: emptyAuthForm,
  loading: false
};

const initialState: AppForms = {
  addCourse,
  addItem,
  login,
  signup
};

export default (state = initialState, action: FormAction<Course>): AppForms => {
  let partialState: Partial<AppForms> | undefined;

  switch (action.type) {
    case UPDATE_FIELD_TEXT:
      partialState = {
        [action.form]: {
          [action.key]: action.value
        }
      };
      break;
    case RESET_TEXT_FIELD:
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
