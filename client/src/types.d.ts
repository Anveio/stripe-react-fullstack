export interface RootState {
  readonly currentUser: UserState;
  readonly notifications: NotificationsState;
  readonly forms: TextForms;
  readonly authForms: AuthForms;
}

export interface Course {
  readonly name: string;
}

export interface PublicUserInfo {
  readonly email: string;
}

export interface JsonWebToken {
  readonly token: string;
}

export interface UserState {
  readonly email: string | null;
  readonly token: string | null;
}

export interface NotificationsState {
  readonly fromServer: BannerMessage[];
}
export interface EnthusiasmState {
  readonly languageName: string;
  readonly level: number;
}

export interface CoursesState {
  readonly list: Course[];
}

export interface TextForms {
  readonly addCourse: Course;
  readonly addItem: Product;
}

export interface AuthForms {
  readonly signup: SignupForm;
  readonly login: LoginForm;
}

export interface UsersListState {
  readonly list: PublicUserInfo[];
}

export interface BannerMessage {
  readonly status: StatusType;
  readonly title?: string;
  readonly message?: string;
}

export type StatusType = 'success' | 'info' | 'warning' | 'critical';

export interface SignupForm {
  readonly email: AuthTextField;
  readonly password: AuthTextField;
  readonly passwordConf: AuthTextField;
  readonly loading: boolean;
}

export interface LoginForm {
  readonly email: AuthTextField;
  readonly password: AuthTextField;
  readonly loading: boolean;
}

export interface SignupPayload {
  readonly email: string;
  readonly password: string;
  readonly passwordConf: string;
}

export interface LoginPayload {
  readonly email: string;
  readonly password: string;
}

export interface AuthTextField {
  readonly text: string;
  readonly error: string | null;
}

export type AuthFieldKey = 'username' | 'email' | 'password' | 'passwordConf';

export interface ExpressValidatorError {
  readonly param: AuthFieldKey | 'server-error';
  readonly msg: string;
  readonly value: string;
}

export interface PassportAuthError {
  readonly message: string;
  readonly name: string;
}

// declare module '*.svg' {
//   // Wierd, but allows us to use import syntax to require SVGs.
//   const x: string;
//   export default x;
// }

export interface Product {
  name: string;
  description: string;
  category?: string;
  imageSrc?: string;
  price: number;
}

export interface JwtConnectionSuccess {
  email: string;
}
