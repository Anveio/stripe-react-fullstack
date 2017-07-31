import * as constants from '../constants';

export type RegisterAccountAction = RegisterAccountFailure | RegisterAccountSuccess;

export interface RegisterAccountSuccess {
  type: constants.REGISTER_ACCOUNT_SUCCESS;
}

export interface RegisterAccountFailure {
  type: constants.REGISTER_ACCOUNT_FAILURE;
  errors: ExpressValidatorError[];
}

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
