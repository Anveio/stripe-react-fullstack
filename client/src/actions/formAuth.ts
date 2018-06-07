import {
  LoginPayload,
  SignupPayload,
  PassportAuthError,
  ExpressValidatorError,
  AuthForms
} from 'types';
import { UPDATE_FIELD_AUTH, ERROR_FIELD_AUTH } from '../constants';

export type AuthPayload = LoginPayload | SignupPayload;

export type FormError = PassportAuthError | ExpressValidatorError[];

export interface AuthFormUpdate<T extends AuthPayload> {
  readonly type: UPDATE_FIELD_AUTH;
  readonly form: keyof AuthForms;
  readonly key: keyof T;
  readonly value: string;
}

export interface AuthFormError<T extends AuthPayload> {
  readonly type: ERROR_FIELD_AUTH;
  readonly form: keyof AuthForms;
  readonly key: keyof T;
  readonly error: FormError;
}

export type AuthFormAction<T extends AuthPayload> =
  | AuthFormUpdate<T>
  | AuthFormError<T>;

export const changeAuthFieldText = <T extends AuthPayload>(
  form: keyof AuthForms,
  key: keyof T,
  value: string
): AuthFormUpdate<T> => ({
  type: UPDATE_FIELD_AUTH,
  form,
  key,
  value
});
