import * as constants from '../constants';

export type AuthPayload = LoginPayload | SignupPayload;

export type ServerError = PassportAuthError | ExpressValidatorError[];

export interface AuthFormUpdate<T extends AuthPayload> {
  type: constants.UPDATE_FIELD_AUTH;
  form: keyof AuthForms;
  key: keyof T;
  value: string;
}
export interface AuthFormSubmit<T extends AuthPayload> {
  type: constants.SUBMIT_FORM_AUTH;
  form: keyof AuthForms;
  payload: T;
}

export interface AuthFormError<T extends AuthPayload> {
  type: constants.ERROR_FIELD_AUTH;
  form: keyof AuthForms;
  key: keyof T;
  error: ServerError;
}

export interface AuthFormReset {
  type: constants.RESET_FIELD_AUTH;
  form: keyof AuthForms;
}

export type AuthFormAction<T extends AuthPayload> =
  | AuthFormUpdate<T>
  | AuthFormReset
  | AuthFormSubmit<T>
  | AuthFormError<T>;

export function changeAuthFieldText<T extends AuthPayload>(
  form: keyof AuthForms,
  key: keyof T,
  value: string
): AuthFormUpdate<T> {
  return {
    type: constants.UPDATE_FIELD_AUTH,
    form,
    key,
    value
  };
}

export function submitAuthField<T extends AuthPayload>(
  form: keyof AuthForms,
  payload: T
): AuthFormSubmit<T> {
  return {
    type: constants.SUBMIT_FORM_AUTH,
    form,
    payload
  };
}

export function resetAuthForm(form: keyof AuthForms): AuthFormReset {
  return {
    type: constants.RESET_FIELD_AUTH,
    form
  }
}