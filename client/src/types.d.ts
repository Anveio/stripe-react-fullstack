declare class Course {
  public readonly name: string;
}

declare class User {
  public readonly username: string;
  public readonly email: string;
  private readonly password: string;
}

declare interface RootState {
  enthusiasm: EnthusiasmState;
  courses: CoursesState;
  forms: AppForms;
}

declare interface EnthusiasmState { 
  languageName: string; 
  level: number;
}

declare interface CoursesState {
  list: Course[];
}

declare interface AppForms {
  signup: SignupForm;
  addCourse: DefaultTextField;
}

declare interface SignupForm {
  email: DefaultTextField;
  username: DefaultTextField;
  password: DefaultTextField;
}

declare interface AuthTextField {
  text: string;
  error: Error | null;
}

declare interface DefaultTextField {
  text: string
}

declare interface AuthState {
  inProgress: boolean;
}