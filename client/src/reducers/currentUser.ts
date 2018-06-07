import { LOGIN_SUCCESS, CLEAR_CURRENT_USER, LOGIN_FAILURE } from '../constants';
import { UserState } from 'types';
import { LoginAction, LogoutUser } from 'actions/login';

const initialState: UserState = {
  loggedIn: false,
  email: '',
  token: ''
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
    case LOGIN_FAILURE:
    case CLEAR_CURRENT_USER:
      return initialState;
    default:
      return state;
  }
};
