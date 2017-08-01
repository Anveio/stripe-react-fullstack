import { AuthFormAction, AuthPayload } from '../actions/authForm';
import { LoginAction } from '../actions/login';
import { RegisterAccountAction } from '../actions/signup';
import {
  UPDATE_FIELD_AUTH,
  // LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_ACCOUNT_FAILURE
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
  action: AuthFormAction<AuthPayload> | LoginAction | RegisterAccountAction
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

      partialState = {
        signup: { ...state.signup, ...fieldsWithErrors, loading: false }
      };
      break;
    default:
      return state;
  }

  return { ...state, ...partialState };
};
