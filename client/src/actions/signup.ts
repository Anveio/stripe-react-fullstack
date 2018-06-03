import { ExpressValidatorError } from 'types';
import {
  REGISTER_ACCOUNT_SUCCESS,
  REGISTER_ACCOUNT_FAILURE
} from '../constants';

export type RegisterAccountAction =
  | RegisterAccountFailure
  | RegisterAccountSuccess;

export interface RegisterAccountSuccess {
  type: REGISTER_ACCOUNT_SUCCESS;
}

export interface RegisterAccountFailure {
  type: REGISTER_ACCOUNT_FAILURE;
  errors: ExpressValidatorError[];
}

export const registerAccountSuccess = (): RegisterAccountSuccess => ({
  type: REGISTER_ACCOUNT_SUCCESS
});

export const registerAccountFailure = (
  errors: ExpressValidatorError[]
): RegisterAccountFailure => ({
  type: REGISTER_ACCOUNT_FAILURE,
  errors
});
