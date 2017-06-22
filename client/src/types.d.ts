declare class Course {
  public readonly name: string;
}

declare class User {
  public readonly username: string;
  public readonly email: string;
  private readonly password: string;
}

interface RootState {
  enthusiasm: EnthusiasmState;
  courses: CoursesState;
  forms: AppForms;
}

interface EnthusiasmState {
  languageName: string;
  level: number;
}

interface CoursesState {
  list: Course[];
}

interface AppForms {
  signup: SignupForm;
  addCourse: AddCourseForm;
}

interface SignupForm {
  email: AuthTextField;
  username: AuthTextField;
  password: AuthTextField;
}

interface AddCourseForm {
  name: DefaultTextField;
}

interface AuthTextField {
  text: string;
  error: Error | null;
}

interface DefaultTextField {
  text: string;
}

interface AuthState {
  inProgress: boolean;
}
