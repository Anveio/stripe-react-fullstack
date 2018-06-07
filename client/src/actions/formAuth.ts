import { LoginPayload, SignupPayload, AuthForms } from 'types';
import { UPDATE_FIELD_AUTH, ERROR_FIELD_AUTH } from '../constants';
import { ApiFormError } from 'server-response-types';

export type AuthPayload = LoginPayload | SignupPayload;

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
  readonly error: ApiFormError;
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
