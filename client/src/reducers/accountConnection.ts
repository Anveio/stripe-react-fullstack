import { AccountConnectionAction } from '../actions/connection';
import { CONNECT_ACCOUNT, DISCONNECT_ACCOUNT } from '../constants';

const initialState: UserState = {
  email: '',
  token: ''
};

export default (state = initialState, action: AccountConnectionAction) => {
  let partialState: Partial<UserState> | undefined;

  switch (action.type) {
    case CONNECT_ACCOUNT:
      partialState = {
        email: action.user.email
      };
      break;
    case DISCONNECT_ACCOUNT:
      partialState = {
        email: ''
      };
      break;
    default:
      return state;
  }
  return { ...state, ...partialState };
};
