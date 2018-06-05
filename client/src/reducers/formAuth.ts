import { AuthFormAction, AuthPayload } from '../actions/formAuth';
import { LoginAction } from '../actions/login';
import { RegisterAccountAction } from '../actions/signup';
import {
  UPDATE_FIELD_AUTH,
  LOGIN_FAILURE,
  REGISTER_ACCOUNT_FAILURE
} from '../constants';
import {
  SignupForm,
  ExpressValidatorError,
  AuthForms,
  AuthTextField,
  LoginForm
} from 'types';

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
          email: { text: '', error: action.error.message },
          password: { text: '', error: action.error.message },
          loading: false
        }
      };
    case REGISTER_ACCOUNT_FAILURE:
      const fieldsWithErrors = action.errors.reduce(
        (newPartialState: Partial<SignupForm>, error: ExpressValidatorError) =>
          Object.assign(newPartialState, {
            [error.param]: {
              text: '',
              error: error.msg
            }
          }),
        { loading: false }
      );
      return {
        ...state,
        signup: { ...state.signup, ...fieldsWithErrors, loading: false }
      };
    default:
      return state;
  }
};
