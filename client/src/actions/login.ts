import * as constants from '../constants';

export type LoginAction = LoginSuccess | LoginFailure;

export interface LoginSuccess {
  type: constants.LOGIN_SUCCESS;
  payload: LoginPayload;
}

export interface LoginFailure {
  type: constants.LOGIN_FAILURE;
  error: PassportAuthError;
}

export const loginSuccess = (payload: LoginPayload): LoginSuccess => {
  return {
    type: constants.LOGIN_SUCCESS,
    payload
  };
};

export const loginFailure = (error: PassportAuthError): LoginFailure => {
  return {
    type: constants.LOGIN_FAILURE,
    error
  };
};
