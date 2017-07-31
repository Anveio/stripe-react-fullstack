interface Course {
  readonly name: string;
}

interface PublicUserInfo {
  readonly email: string;
}

interface JsonWebToken {
  readonly token: string;
}

interface RootState {
  readonly currentUser: UserState;
  readonly notifications: NotificationsState;
  readonly enthusiasm: EnthusiasmState;
  readonly courses: CoursesState;
  readonly forms: AppForms;
  readonly users: UsersListState;
  readonly shelf: ShelfState;
}

interface UserState {
  readonly email: string | null;
  readonly token: string | null;
}

interface NotificationsState {
  readonly fromServer: ServerMessage[];
}
interface EnthusiasmState {
  readonly languageName: string;
  readonly level: number;
}

interface CoursesState {
  readonly list: Course[];
}

interface AppForms {
  readonly signup: SignupForm;
  readonly login: LoginForm;
  readonly addCourse: Course;
  readonly addItem: Product;
}

interface UsersListState {
  readonly list: PublicUserInfo[];
}

interface ShelfState {
  products: Product[];
}

interface ServerMessage {
  readonly status: StatusType;
  readonly title: string;
  readonly message: string;
}

interface Action {
  readonly content?: string;
  readonly accessibilityLabel?: string;
  readonly url?: string;
  readonly onAction: () => void;
}

declare type StatusType = 'success' | 'info' | 'warning' | 'critical';

interface SignupForm {
  readonly email: AuthTextField;
  readonly username: AuthTextField;
  readonly password: AuthTextField;
  readonly passwordConf: AuthTextField;
  readonly loading: boolean;
}

interface LoginForm {
  readonly email: AuthTextField;
  readonly password: AuthTextField;
  readonly loading: boolean;
}

interface SignupPayload {
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly passwordConf: string;
}

interface LoginPayload {
  readonly email: string;
  readonly password: string;
}

interface AddCourseForm {
  readonly name: DefaultTextField;
}

interface AuthTextField {
  readonly text: string;
  readonly error: string | null;
}

interface DefaultTextField {
  readonly text: string;
}

declare type AuthFieldKey = 'username' | 'email' | 'password' | 'passwordConf';

interface ExpressValidatorError {
  readonly param: AuthFieldKey | 'server-error';
  readonly msg: string;
  readonly value: string;
}

interface PassportAuthError {
  readonly message: string;
  readonly name: string;
}

declare module '*.svg' {
  // Wierd, but allows us to use import syntax to require SVGs.
  const x: string;
  export default x;
}

interface Product {
  name: string;
  description: string;
  category?: string;
  imageSrc?: string;
  price: number;
}
