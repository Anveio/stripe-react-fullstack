import * as constants from '../constants';

export interface GetUserListSuccess {
  type: constants.GET_USER_LIST_SUCCESS;
  userList: PublicUserInfo[];
}

export interface GetUserListFailure {
  type: constants.GET_USER_LIST_FAILURE;
}

export type UserListAction = GetUserListFailure | GetUserListSuccess;

export const getUserListSuccess = (userList: PublicUserInfo[]) => {
  return {
    type: constants.GET_USER_LIST_SUCCESS,
    userList
  };
};

export const getUserListFailure = () => {
  return {
    type: constants.GET_USER_LIST_FAILURE
  };
};
