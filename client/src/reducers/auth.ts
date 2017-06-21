import { AccountAction } from '../actions/auth'; 
import { CONNECT_ACCOUNT, DISCONNECT_ACCOUNT } from '../constants';

export default (state: AuthState, action: AccountAction): AuthState => {
  // let partialState: Partial<AuthState> | undefined;
  switch (action.type) {
    case CONNECT_ACCOUNT: 
      return state;
    case DISCONNECT_ACCOUNT:
      return state;
    default: return state;
  }
};