import { GET_USER_LIST_SUCCESS, GET_USER_LIST_FAILURE } from '../constants';
import { PublicUserInfo } from 'types';

export interface GetUserListSuccess {
  type: GET_USER_LIST_SUCCESS;
  userList: PublicUserInfo[];
}

export interface GetUserListFailure {
  type: GET_USER_LIST_FAILURE;
}

export type UserListAction = GetUserListFailure | GetUserListSuccess;

export const getUserListSuccess = (
  userList: PublicUserInfo[]
): GetUserListSuccess => ({
  type: GET_USER_LIST_SUCCESS,
  userList
});

export const getUserListFailure = (): GetUserListFailure => ({
  type: GET_USER_LIST_FAILURE
});
