export interface ExpressValidatorError {
  readonly param: AuthFieldKey;
  readonly msg: string;
}

export interface PassportAuthError {
  readonly message: string;
}

export type ApiFormError = PassportAuthError | ExpressValidatorError[];

export interface LoginSuccessResponse {
  readonly email: string;
  readonly token: string;
}

export interface SignupFailureResponse {
  readonly errors: ExpressValidatorError[];
}
