import * as constants from '../constants';

export interface RegisterAccountRequest {
  type: constants.REGISTER_ACCOUNT_REQUEST;
  data: RegistrationData;
}

export interface RegisterAccountSuccess {
  type: constants.REGISTER_ACCOUNT_SUCCESS;
}

export interface RegisterAccountFailure {
  type: constants.REGISTER_ACCOUNT_FAILURE;
  errors: SignupValidationErrorRes[];
}

export interface AuthFieldUpdate {
  type: constants.UPDATE_FIELD_AUTH;
  key: SignupFieldKey;
  value: string;
}

export interface LoginAction {
  type: constants.LOGIN_USER;
  payload: User;
}

export interface LogoutAction {
  type: constants.LOGOUT_USER;
}

export type AuthAction =
  | AuthFieldUpdate
  | RegisterAccountAction
  | AccountConnectionAction;
export type RegisterAccountAction =
  | RegisterAccountRequest
  | RegisterAccountFailure
  | RegisterAccountSuccess;

export type AccountConnectionAction = LoginAction | LogoutAction;

export const registerAccountRequest = (
  data: RegistrationData
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
  errors: SignupValidationErrorRes[]
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
