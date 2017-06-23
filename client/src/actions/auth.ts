import * as constants from '../constants';

// const ROOT_URL = constants.rootUrl();

export interface RegisterAccountRequest {
  type: constants.REGISTER_ACCOUNT_REQUEST;
  data: RegistrationData;
}

export interface RegisterAccountSuccess {
  type: constants.REGISTER_ACCOUNT_SUCCESS;
  data: RegistrationData;
}

export interface RegisterAccountFailure {
  type: constants.REGISTER_ACCOUNT_FAILURE;
  error: Error;
}

export interface AuthFieldUpdate {
  type: constants.UPDATE_FIELD_AUTH;
  key: string;
  value: string;
}

export type AuthAction = AuthFieldUpdate | RegisterAccountAction;
export type RegisterAccountAction =
  | RegisterAccountRequest
  | RegisterAccountFailure
  | RegisterAccountSuccess;

export const registerAccountRequest = (
  data: RegistrationData
): RegisterAccountRequest => {
  return {
    type: constants.REGISTER_ACCOUNT_REQUEST,
    data
  };
};

export const registerAccountSuccess = (data: any): RegisterAccountSuccess => {
  return {
    type: constants.REGISTER_ACCOUNT_SUCCESS,
    data
  };
};

export const registerAccountFailure = (
  error: Error
): RegisterAccountFailure => {
  return {
    type: constants.REGISTER_ACCOUNT_FAILURE,
    error
  };
};

export const changeAuthFieldText = (
  value: string,
  key: string
): AuthFieldUpdate => {
  return {
    type: constants.UPDATE_FIELD_AUTH,
    key,
    value
  };
};
