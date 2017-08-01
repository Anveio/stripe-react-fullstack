import { AuthFormAction, AuthPayload } from '../actions/authForm';
import { LoginAction } from '../actions/login';
import {
  UPDATE_FIELD_AUTH,
  // LOGIN_SUCCESS,
  LOGIN_FAILURE
  // REGISTER_ACCOUNT_FAILURE,
  // REGISTER_ACCOUNT_SUCCESS
} from '../constants';

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
  action: AuthFormAction<AuthPayload> | LoginAction
): AuthForms => {
  let partialState: Partial<AuthForms> | undefined;

  switch (action.type) {
    case UPDATE_FIELD_AUTH:
      partialState = {
        [action.form]: {
          ...state[action.form],
          [action.key]: { text: action.value, error: null }
        }
      };
      break;
    case LOGIN_FAILURE:
      partialState = {
        login: {
          email: { text: '', error: action.error.message },
          password: { text: '', error: action.error.message },
          loading: false
        }
      };
      break;
    default:
      return state;
  }

  return { ...state, ...partialState };
};
