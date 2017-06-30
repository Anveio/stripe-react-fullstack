import { UserListAction } from '../actions/users';
import { GET_USER_LIST_FAILURE, GET_USER_LIST_SUCCESS } from '../constants';

const initial: UsersListState = {
  list: []
};

export default (state = initial, action: UserListAction): UsersListState => {
  let partialState: Partial<UsersListState> | undefined;

  switch (action.type) {
    case GET_USER_LIST_FAILURE:
      break;
    case GET_USER_LIST_SUCCESS:
      break;
    default:
      return state;
  }
  return { ...state, ...partialState };
};
