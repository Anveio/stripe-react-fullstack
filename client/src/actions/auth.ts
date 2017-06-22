import * as constants from '../constants';

// const ROOT_URL = constants.rootUrl();

export interface RegisterAccountRequest {
  type: constants.REGISTER_ACCOUNT_REQUEST;
  user: User;
}

export interface RegisterAccountSuccess {
  type: constants.REGISTER_ACCOUNT_SUCCESS;
}

export interface RegisterAccountFailure {
  type: constants.REGISTER_ACCOUNT_FAILURE;
}

export interface AuthFieldUpdate {
  type: constants.UPDATE_FIELD_AUTH;
  key: string;
  value: string;
}

export type AuthAction = AuthFieldUpdate;
export type RegisterAccountAction =
  | RegisterAccountRequest
  | RegisterAccountFailure
  | RegisterAccountSuccess;

export function registerAccountReq(user: User): RegisterAccountRequest {
  return {
    type: constants.REGISTER_ACCOUNT_REQUEST,
    user
  };
}

export function changeAuthFieldText(
  value: string,
  key: string
): AuthFieldUpdate {
  return {
    type: constants.UPDATE_FIELD_AUTH,
    key,
    value
  };
}
