import { AuthAction, LoginAction } from '../actions/auth';
import {
  UPDATE_FIELD_AUTH,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS
} from '../constants';

const emptyAuthForm: AuthTextField = { text: '', error: null };

const initialState: LoginForm = {
  email: emptyAuthForm,
  password: emptyAuthForm,
  loading: false
};

export default (
  state = initialState,
  action: AuthAction | LoginAction
): LoginForm => {
  let partialState: Partial<LoginForm> | undefined;

  switch (action.type) {
    case UPDATE_FIELD_AUTH:
      partialState = {
        [action.key]: {
          text: action.value
        }
      };
      break;
    case LOGIN_REQUEST:
      partialState = {
        loading: true
      };
      break;
    case LOGIN_FAILURE:
      partialState = {
        email: { text: '', error: action.error.message },
        password: { text: '', error: action.error.message },
        loading: false
      };
      break;
    case LOGIN_SUCCESS:
      partialState = {
        loading: false
      };
      break;
    default:
      return state;
  }
  return { ...state, ...partialState };
};
