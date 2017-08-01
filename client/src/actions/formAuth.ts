import * as constants from '../constants';

export type AuthPayload = LoginPayload | SignupPayload;

export type FormError = PassportAuthError | ExpressValidatorError[];

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
  error: FormError;
}

export type AuthFormAction<T extends AuthPayload> =
  | AuthFormUpdate<T>
  | AuthFormSubmit<T>
  | AuthFormError<T>;

export const changeAuthFieldText = <T extends AuthPayload>(
  form: keyof AuthForms,
  key: keyof T,
  value: string
): AuthFormUpdate<T> => ({
  type: constants.UPDATE_FIELD_AUTH,
  form,
  key,
  value
});

export const submitAuthField = <T extends AuthPayload>(
  form: keyof AuthForms,
  payload: T
): AuthFormSubmit<T> => ({
  type: constants.SUBMIT_FORM_AUTH,
  form,
  payload
});
