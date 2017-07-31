import { AuthFormAction, AuthFormTypes } from '../actions/authForm';
import { UPDATE_FIELD_AUTH, RESET_FIELD_AUTH } from '../constants';

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

const initialState: AuthForms = {
  login,
  signup
};

export default (
  state = initialState,
  action: AuthFormAction<AuthFormTypes>
): AuthForms => {
  let partialState: Partial<AuthForms> | undefined;

  switch (action.type) {
    case UPDATE_FIELD_AUTH:
      partialState = {
        [action.form]: {
          [action.key]: action.value,
          error: null
        }
      };
      break;
    case RESET_FIELD_AUTH:
      partialState = {
        [action.form]: {
          [action.key]: '',
          error: null,
        }
      };
      break;
    default:
      return state;
  }

  return { ...state, ...partialState };
};
