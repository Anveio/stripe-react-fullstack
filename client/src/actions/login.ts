import { PassportAuthError } from 'types';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from '../constants';

export type LoginAction = LoginRequest | LoginFailure | LoginSuccess;

export interface LoginRequest {
  readonly type: LOGIN_REQUEST;
}

export interface LoginSuccess {
  readonly type: LOGIN_SUCCESS;
}

export interface LoginFailure {
  readonly type: LOGIN_FAILURE;
  readonly error: PassportAuthError;
}

export const loginFailure = (error: PassportAuthError): LoginFailure => ({
  type: LOGIN_FAILURE,
  error
});
