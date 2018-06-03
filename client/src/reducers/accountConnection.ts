import { AccountConnectionAction } from '../actions/connection';
import { CONNECT_ACCOUNT, DISCONNECT_ACCOUNT } from '../constants';
import { UserState } from 'types';

const initialState: UserState = {
  email: '',
  token: ''
};

export default (state = initialState, action: AccountConnectionAction) => {
  switch (action.type) {
    case CONNECT_ACCOUNT:
      return {
        ...state,
        email: action.user.email,
        token: action.user.token
      };
    case DISCONNECT_ACCOUNT:
      return {
        ...state,
        email: ''
      };
    default:
      return state;
  }
};
