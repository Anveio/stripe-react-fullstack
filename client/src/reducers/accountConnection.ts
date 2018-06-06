import { AccountConnectionAction } from '../actions/connection';
import { CONNECT_ACCOUNT, DISCONNECT_ACCOUNT } from '../constants';
import { UserState } from 'types';

const initialState: UserState = {
  loggedIn: false,
  email: '',
  token: ''
};

export default (state = initialState, action: AccountConnectionAction) => {
  switch (action.type) {
    case CONNECT_ACCOUNT:
      return {
        ...state,
        loggedIn: true,
        email: action.email,
        token: action.token
      };
    case DISCONNECT_ACCOUNT:
      return initialState;
    default:
      return state;
  }
};
