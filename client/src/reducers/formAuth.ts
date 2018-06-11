import { AuthFormAction, AuthPayload } from '../actions/formAuth';
import { LoginAction } from '../actions/login';
import { RegisterAccountAction } from '../actions/signup';
import {
  UPDATE_FIELD_AUTH,
  LOGIN_FAILURE,
  REGISTER_ACCOUNT_FAILURE,
  REGISTER_ACCOUNT_REQUEST,
  LOGIN_REQUEST
} from '../constants';
import { SignupForm, AuthForms, LoginForm } from 'types';

const login: LoginForm = {
  email: '',
  password: '',
  loading: false,
  errors: {
    email: undefined,
    password: undefined
  }
};

const signup: SignupForm = {
  email: '',
  password: '',
  passwordConf: '',
  loading: false,
  errors: {
    email: undefined,
    password: undefined,
    passwordConf: undefined
  }
};

const initialState: AuthForms = {
  login,
  signup
};

export default (
  state = initialState,
  action: AuthFormAction<AuthPayload> | LoginAction | RegisterAccountAction
): AuthForms => {
  switch (action.type) {
    case UPDATE_FIELD_AUTH:
      return {
        ...state,
        [action.form]: {
          ...state[action.form],
          [action.key]: action.value,
          errors: {
            ...state[action.form].errors,
            [action.key]: undefined
          }
        }
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        login: {
          ...state.login,
          loading: false,
          errors: {
            ...state.login.errors,
            ...action.errors
          }
        }
      };
    case REGISTER_ACCOUNT_FAILURE:
      return {
        ...state,
        signup: {
          ...state.signup,
          loading: false,
          errors: { ...state.signup.errors, ...action.errors }
        }
      };
    case REGISTER_ACCOUNT_REQUEST:
      return {
        ...state,
        signup: {
          ...state.signup,
          loading: true
        }
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        login: {
          ...state.login,
          loading: true
        }
      };
    default:
      return state;
  }
};
