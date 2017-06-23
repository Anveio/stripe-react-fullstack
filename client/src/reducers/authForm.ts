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
      console.log(action.errors);
      //       partialState = {
      //   [error.param]: {
      //     error: error.msg
      //   }
      // };

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
      console.log(partialState);

      // for (let error in action.errors) {
      //   if (action.errors.hasOwnProperty(error)) {
      //     partialState = {
      //       [action.errors[error].param]: {
      //         error: new Error(action.errors[error].msg)
      //       }
      //     };
      //   }
      // }

      // partialState = {
      //   [action.errors.param]: {
      //     error: action.errors.msg
      //   }
      // };

      break;
    case REGISTER_ACCOUNT_SUCCESS:
      break;
    default:
      return state;
  }
  console.log({ ...state, ...partialState });
  return { ...state, ...partialState };
};
