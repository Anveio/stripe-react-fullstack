import { UserListAction } from '../actions/users';
import { GET_USER_LIST_SUCCESS } from '../constants';
import { UsersListState } from 'types';

const initial: UsersListState = {
  list: []
};

export default (state = initial, action: UserListAction): UsersListState => {
  switch (action.type) {
    case GET_USER_LIST_SUCCESS:
      return {
        list: action.userList
      };
    default:
      return state;
  }
};
