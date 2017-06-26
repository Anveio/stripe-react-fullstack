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
  readonly notifications: NotificationsState;
  readonly enthusiasm: EnthusiasmState;
  readonly courses: CoursesState;
  readonly forms: AppForms;
}

interface AccountConnection {
  account: User | null;
}

interface NotificationsState {
  fromServer: ServerMessage[];
}

interface ServerMessage {
  status: StatusType;
  title: string;
  message: string;
  secondaryAction?: Action;
  onDismiss?(): void;
}

interface Action {
  content?: string;
  accessibilityLabel?: string;
  url?: string;
  onAction?(): void;
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

declare type StatusType = 'success' | 'info' | 'warning' | 'critical';

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

declare type SignupFieldKey =
  | 'username'
  | 'email'
  | 'password'
  | 'passwordConf';

interface ExpressValidatorError {
  readonly param: SignupFieldKey | 'server-error';
  readonly msg: string;
  readonly value: string;
}
