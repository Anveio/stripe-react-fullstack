import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  CLEAR_CURRENT_USER
} from '../constants';
import { FormErrorMap, LoginPayload } from 'types';

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
  readonly errors: Partial<FormErrorMap<LoginPayload>>;
}

export interface LogoutUser {
  readonly type: CLEAR_CURRENT_USER;
}

export const loginRequest: LoginRequest = { type: LOGIN_REQUEST };

export const loginFailure = (
  errors: Partial<FormErrorMap<LoginPayload>>
): LoginFailure => ({
  type: LOGIN_FAILURE,
  errors
});

export const loginSuccess = (email: string, token: string): LoginSuccess => ({
  type: LOGIN_SUCCESS,
  email,
  token
});

export const logoutUser: LogoutUser = { type: CLEAR_CURRENT_USER };
