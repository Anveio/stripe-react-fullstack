import { AuthFormAction, AuthPayload } from '../actions/authForm';
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
  action: AuthFormAction<AuthPayload>
): AuthForms => {
  let partialState: Partial<AuthForms> | undefined;
  // let partialField: Partial<AuthFormTypes> | undefined;

  switch (action.type) {
    case UPDATE_FIELD_AUTH:
      partialState = {
        [action.form]: {
          ...state[action.form],
          [action.key]: { text: action.value, error: null }
        }
      };
      break;
    case RESET_FIELD_AUTH:
      partialState = {
        [action.form]: {
          [action.key]: '',
          error: null
        }
      };
      break;
    default:
      return state;
  }

  return { ...state, ...partialState };
};
