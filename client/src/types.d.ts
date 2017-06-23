declare class InternalJsonResponse {
  res: Response;
  status: number;
  content: Object;
}

declare class Course {
  public readonly name: string;
}

declare class User {
  public readonly username: string;
  public readonly email: string;
}

interface RootState {
  readonly currentUser: AccountConnection;
  readonly enthusiasm: EnthusiasmState;
  readonly courses: CoursesState;
  readonly forms: AppForms;
}

interface AccountConnection {
  account: User | null;
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
  readonly addCourse: AddCourseForm;
}

interface SignupForm {
  readonly email: AuthTextField;
  readonly username: AuthTextField;
  readonly password: AuthTextField;
  readonly passwordConf: AuthTextField;
  readonly loading: boolean;
}

interface RegistrationData {
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly passwordConf: string;
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

interface AuthState {
  readonly inProgress: boolean;
}

declare type SignupFieldKey =
  | 'username'
  | 'email'
  | 'password'
  | 'passwordConf';

interface SignupValidationErrorRes {
  readonly param: (
    | 'username'
    | 'email'
    | 'password'
    | 'passwordConf'
    | 'server-error');
  readonly msg: string;
  readonly value: string;
}
