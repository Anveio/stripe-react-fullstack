import {
  REGISTER_ACCOUNT_SUCCESS,
  REGISTER_ACCOUNT_FAILURE,
  REGISTER_ACCOUNT_REQUEST
} from '../constants';
import { SignupPayload, FormErrorMap } from 'types';

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
  readonly errors: Partial<FormErrorMap<SignupPayload>>;
}

export const registerAccountRequest: RegisterAccountRequest = {
  type: REGISTER_ACCOUNT_REQUEST
};

export const registerAccountSuccess = (): RegisterAccountSuccess => ({
  type: REGISTER_ACCOUNT_SUCCESS
});

export const registerAccountFailure = (
  errors: Partial<FormErrorMap<SignupPayload>>
): RegisterAccountFailure => ({
  type: REGISTER_ACCOUNT_FAILURE,
  errors
});
