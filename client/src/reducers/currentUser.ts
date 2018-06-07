import { LOGIN_SUCCESS, CLEAR_CURRENT_USER } from '../constants';
import { UserState } from 'types';
import { LoginAction, LogoutUser } from 'actions/login';

const initialState: UserState = {
  loggedIn: false,
  email: null,
  token: null
};

export default (state = initialState, action: LoginAction | LogoutUser) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        email: action.email,
        token: action.token
      };
    case CLEAR_CURRENT_USER:
      return initialState;
    default:
      return state;
  }
};
