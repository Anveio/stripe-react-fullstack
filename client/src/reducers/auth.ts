import { AuthAction, RegisterAccountAction } from '../actions/auth';
import { UPDATE_FIELD_AUTH } from '../constants';

const emptyAuthForm: AuthTextField = { text: '', error: null };

const initialState: SignupForm = {
  email: emptyAuthForm,
  username: emptyAuthForm,
  password: emptyAuthForm
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
    default:
      return state;
  }

  // console.log({ ...state, ...partialState });

  return { ...state, ...partialState };
};
