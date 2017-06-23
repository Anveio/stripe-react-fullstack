import { AccountConnectionAction } from '../actions/auth';
import { LOGIN_USER, LOGOUT_USER } from '../constants';

const initialState: AccountConnection = {
  account: null
};

export default (
  state = initialState,
  action: AccountConnectionAction
): AccountConnection => {
  let partialState: Partial<AccountConnection> | undefined;

  switch (action.type) {
    case LOGIN_USER:
      partialState = {
        account: {
          email: action.payload.email,
          username: action.payload.username
        }
      };
      break;
    case LOGOUT_USER:
      partialState = {
        account: null
      };
      break;
    default:
      return state;
  }

  return { ...state, ...partialState };
};
