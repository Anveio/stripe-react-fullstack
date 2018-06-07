import { PassportAuthError } from 'types';
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  CLEAR_CURRENT_USER
} from '../constants';

export type LoginAction = LoginRequest | LoginFailure | LoginSuccess;

export interface LoginRequest {
  readonly type: LOGIN_REQUEST;
}

export interface LoginSuccess {
  readonly type: LOGIN_SUCCESS;
  readonly email: string;
  readonly token: string;
}

export interface LoginFailure {
  readonly type: LOGIN_FAILURE;
  readonly error: PassportAuthError;
}

export interface LogoutUser {
  readonly type: CLEAR_CURRENT_USER;
}

export const loginFailure = (error: PassportAuthError): LoginFailure => ({
  type: LOGIN_FAILURE,
  error
});

export const loginSuccess = (email: string, token: string): LoginSuccess => ({
  type: LOGIN_SUCCESS,
  email,
  token
});

export const logoutUser: LogoutUser = { type: CLEAR_CURRENT_USER };
