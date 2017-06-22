declare class Course {
  public readonly name: string;
}

declare class User {
  public readonly username: string;
  public readonly password: string;
  public readonly email: string;
}

interface RootState {
  readonly enthusiasm: EnthusiasmState;
  readonly courses: CoursesState;
  readonly forms: AppForms;
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
}

interface AddCourseForm {
  readonly name: DefaultTextField;
}

interface AuthTextField {
  readonly text: string;
  readonly error: Error | null;
}

interface DefaultTextField {
  readonly text: string;
}

interface AuthState {
 readonly  inProgress: boolean;
}
