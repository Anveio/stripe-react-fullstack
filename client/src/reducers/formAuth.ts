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
import { SignupForm, AuthForms, AuthTextField, LoginForm } from 'types';
import { ExpressValidatorError } from 'server-response-types';

const emptyAuthForm: AuthTextField = { text: '', error: null };

const login: LoginForm = {
  email: emptyAuthForm,
  password: emptyAuthForm,
  loading: false
};

const signup: SignupForm = {
  email: emptyAuthForm,
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
  action: AuthFormAction<AuthPayload> | LoginAction | RegisterAccountAction
): AuthForms => {
  switch (action.type) {
    case UPDATE_FIELD_AUTH:
      return {
        ...state,
        [action.form]: {
          ...state[action.form],
          [action.key]: { text: action.value, error: null }
        }
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        login: {
          email: { ...state.login.email, error: action.error },
          password: { ...state.login.password, error: action.error },
          loading: false
        }
      };
    case REGISTER_ACCOUNT_FAILURE:
      const fieldsWithErrors = action.errors.reduce(
        (acc: SignupForm, error: ExpressValidatorError) => ({
          ...acc,
          [error.param]: {
            ...acc[error.param],
            error: error.msg
          }
        }),
        { ...state.signup, loading: false }
      );

      return {
        ...state,
        signup: { ...state.signup, ...fieldsWithErrors, loading: false }
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
