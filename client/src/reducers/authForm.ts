import { AuthAction, RegisterAccountAction } from '../actions/auth';
import {
  UPDATE_FIELD_AUTH,
  REGISTER_ACCOUNT_FAILURE,
  REGISTER_ACCOUNT_REQUEST,
  REGISTER_ACCOUNT_SUCCESS
} from '../constants';

const emptyAuthForm: AuthTextField = { text: '', error: null };

const initialState: SignupForm = {
  email: emptyAuthForm,
  username: emptyAuthForm,
  password: emptyAuthForm,
  passwordConf: emptyAuthForm,
  loading: false
};

export default (
  state = initialState,
  action: AuthAction | RegisterAccountAction
): SignupForm => {
  let partialState: Partial<SignupForm> | undefined;

  switch (action.type) {
    case UPDATE_FIELD_AUTH:
      partialState = {
        [action.key]: {
          text: action.value
        }
      };
      break;
    case REGISTER_ACCOUNT_REQUEST:
      partialState = {
        loading: true
      };
      break;
    case REGISTER_ACCOUNT_FAILURE:
      partialState = action.errors.reduce(
        (newPartialState, error: SignupValidationErrorRes) => {
          return Object.assign(newPartialState, {
            [error.param]: {
              error: error.msg
            }
          });
        },
        {}
      );

      break;
    case REGISTER_ACCOUNT_SUCCESS:
      break;
    default:
      return state;
  }
  return { ...state, ...partialState };
};
