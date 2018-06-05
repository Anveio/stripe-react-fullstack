import {
  LoginPayload,
  SignupPayload,
  PassportAuthError,
  ExpressValidatorError,
  AuthForms
} from 'types';
import {
  UPDATE_FIELD_AUTH,
  ERROR_FIELD_AUTH
} from '../constants';

export type AuthPayload = LoginPayload | SignupPayload;

export type FormError = PassportAuthError | ExpressValidatorError[];

export interface AuthFormUpdate<T extends AuthPayload> {
  type: UPDATE_FIELD_AUTH;
  form: keyof AuthForms;
  key: keyof T;
  value: string;
}

export interface AuthFormError<T extends AuthPayload> {
  type: ERROR_FIELD_AUTH;
  form: keyof AuthForms;
  key: keyof T;
  error: FormError;
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
