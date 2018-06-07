import {
  REGISTER_ACCOUNT_SUCCESS,
  REGISTER_ACCOUNT_FAILURE,
  REGISTER_ACCOUNT_REQUEST
} from '../constants';
import { ExpressValidatorError } from 'server-response-types';

export type RegisterAccountAction =
  | RegisterAccountFailure
  | RegisterAccountSuccess
  | RegisterAccountRequest;

export interface RegisterAccountRequest {
  readonly type: REGISTER_ACCOUNT_REQUEST;
}

export interface RegisterAccountSuccess {
  readonly type: REGISTER_ACCOUNT_SUCCESS;
}

export interface RegisterAccountFailure {
  readonly type: REGISTER_ACCOUNT_FAILURE;
  readonly errors: ExpressValidatorError[];
}

export const registerAccountRequest: RegisterAccountRequest = {
  type: REGISTER_ACCOUNT_REQUEST
};

export const registerAccountSuccess = (): RegisterAccountSuccess => ({
  type: REGISTER_ACCOUNT_SUCCESS
});

export const registerAccountFailure = (
  errors: ExpressValidatorError[]
): RegisterAccountFailure => ({
  type: REGISTER_ACCOUNT_FAILURE,
  errors
});
