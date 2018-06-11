export interface RootState {
  readonly currentUser: UserState;
  readonly authForms: AuthForms;
}

export interface UserState {
  readonly loggedIn: boolean;
  readonly email: string | null;
  readonly token: string | null;
}

export interface AuthForms {
  readonly signup: SignupForm;
  readonly login: LoginForm;
}

export interface FormError<T> {
  readonly field: keyof T;
  readonly error: string;
}

export type FormErrorMap<T> = { [k in keyof T]: string | undefined };

export interface SignupPayload {
  readonly email: string;
  readonly password: string;
  readonly passwordConf: string;
}

export interface SignupForm extends SignupPayload {
  readonly errors: FormErrorMap<SignupPayload>;
  readonly loading: boolean;
}

export interface LoginPayload {
  readonly email: string;
  readonly password: string;
}

export interface LoginForm extends LoginPayload {
  readonly errors: FormErrorMap<LoginPayload>;
  readonly loading: boolean;
}
