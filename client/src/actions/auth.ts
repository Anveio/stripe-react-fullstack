import * as constants from '../constants';

export interface RegisterAccountRequest {
  type: constants.REGISTER_ACCOUNT_REQUEST;
  data: SignupPayload;
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
  data: LoginPayload;
}

export interface LoginSuccess {
  type: constants.LOGIN_SUCCESS;
}

export interface LoginFailure {
  type: constants.LOGIN_FAILURE;
  errors: ExpressValidatorError[];
}

export interface AuthFieldUpdate {
  type: constants.UPDATE_FIELD_AUTH;
  key: SignupFieldKey;
  value: string;
}

export type AuthAction = AuthFieldUpdate | RegisterAccountAction;
export type RegisterAccountAction =
  | RegisterAccountRequest
  | RegisterAccountFailure
  | RegisterAccountSuccess;

export type LoginAction = LoginRequest | LoginSuccess | LoginFailure;

export const registerAccountRequest = (
  data: SignupPayload
): RegisterAccountRequest => {
  return {
    type: constants.REGISTER_ACCOUNT_REQUEST,
    data
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
  key: SignupFieldKey
): AuthFieldUpdate => {
  return {
    type: constants.UPDATE_FIELD_AUTH,
    key,
    value
  };
};

export const loginRequest = (data: LoginPayload): LoginRequest => {
  return {
    type: constants.LOGIN_REQUEST,
    data
  };
};

export const loginSuccess = (): LoginSuccess => {
  return {
    type: constants.LOGIN_SUCCESS
  };
};

export const loginFailure = (errors: ExpressValidatorError[]): LoginFailure => {
  return {
    type: constants.LOGIN_FAILURE,
    errors
  };
};
