import * as constants from '../constants';

export type AuthFormTypes = LoginPayload | SignupPayload;

export type ServerError = PassportAuthError | ExpressValidatorError[];

export interface AuthFormUpdate<T extends AuthFormTypes> {
  type: constants.UPDATE_FIELD_AUTH;
  form: keyof AuthForms;
  key: keyof T;
  value: string;
}
export interface AuthFormSubmit<T extends AuthFormTypes> {
  type: constants.SUBMIT_FORM_AUTH;
  form: keyof AuthForms;
  payload: T;
}

export interface AuthFormError<T extends AuthFormTypes> {
  type: constants.ERROR_FIELD_AUTH;
  form: keyof AuthForms;
  key: keyof T;
  error: ServerError;
}

export interface AuthFormReset<T extends AuthFormTypes> {
  type: constants.RESET_FIELD_AUTH;
  form: keyof AuthForms;
  key: keyof T;
}

export type AuthFormAction<T extends AuthFormTypes> =
  | AuthFormUpdate<T>
  | AuthFormReset<T>
  | AuthFormSubmit<T>
  | AuthFormError<T>;

export function changeAuthFieldText<T extends AuthFormTypes>(
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

export function submitAuthField<T extends AuthFormTypes>(
  form: keyof AuthForms,
  payload: T
): AuthFormSubmit<T> {
  return {
    type: constants.SUBMIT_FORM_AUTH,
    form,
    payload
  };
}
