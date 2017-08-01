import * as constants from '../constants';

export type LoginAction = LoginFailure;

export interface LoginFailure {
  type: constants.LOGIN_FAILURE;
  error: PassportAuthError;
}

export const loginFailure = (error: PassportAuthError): LoginFailure => ({
  type: constants.LOGIN_FAILURE,
  error
});
