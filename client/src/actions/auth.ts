import * as constants from '../constants';

export interface RegisterAccountRequest {
  type: constants.REGISTER_ACCOUNT_REQUEST;
  payload: SignupPayload;
}

export interface RegisterAccountSuccess {
  type: constants.REGISTER_ACCOUNT_SUCCESS;
}

export interface RegisterAccountFailure {
  type: constants.REGISTER_ACCOUNT_FAILURE;
  errors: ExpressValidatorError[];
}

export interface LoginRequest {
  type: constants.LOGIN_REQUEST;
  payload: LoginPayload;
}

export interface LoginSuccess {
  type: constants.LOGIN_SUCCESS;
  payload: LoginPayload;
}

export interface LoginFailure {
  type: constants.LOGIN_FAILURE;
  error: PassportAuthError;
}

export interface AuthFieldUpdate {
  type: constants.UPDATE_FIELD_AUTH;
  key: AuthFieldKey;
  value: string;
}

export type AuthAction = AuthFieldUpdate | RegisterAccountAction;
export type RegisterAccountAction =
  | RegisterAccountRequest
  | RegisterAccountFailure
  | RegisterAccountSuccess;

export type LoginAction = LoginRequest | LoginSuccess | LoginFailure;

export const registerAccountRequest = (
  payload: SignupPayload
): RegisterAccountRequest => {
  return {
    type: constants.REGISTER_ACCOUNT_REQUEST,
    payload
  };
};

export const registerAccountSuccess = (): RegisterAccountSuccess => {
  return {
    type: constants.REGISTER_ACCOUNT_SUCCESS
  };
};

export const registerAccountFailure = (
  errors: ExpressValidatorError[]
): RegisterAccountFailure => {
  return {
    type: constants.REGISTER_ACCOUNT_FAILURE,
    errors
  };
};

export const changeAuthFieldText = (
  value: string,
  key: AuthFieldKey
): AuthFieldUpdate => {
  return {
    type: constants.UPDATE_FIELD_AUTH,
    key,
    value
  };
};

export const loginRequest = (payload: LoginPayload): LoginRequest => {
  return {
    type: constants.LOGIN_REQUEST,
    payload
  };
};

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