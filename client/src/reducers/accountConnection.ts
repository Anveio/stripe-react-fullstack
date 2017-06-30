import { AccountConnectionAction } from '../actions/connection';
import { CONNECT_ACCOUNT, DISCONNECT_ACCOUNT } from '../constants';

const initialState: CurrentUserState = {
  account: null
};

export default (state = initialState, action: AccountConnectionAction) => {
  let partialState: Partial<CurrentUserState> | undefined;

  switch (action.type) {
    case CONNECT_ACCOUNT:
      partialState = {
        account: {
          email: action.user.email
        }
      };
      break;
    case DISCONNECT_ACCOUNT:
      partialState = {
        account: null
      };
      break;
    default:
      return state;
  }
  return { ...state, ...partialState };
};
