import { Course } from './schema';

export interface RootState {
  enthusiasm: EnthusiasmState;
  courses: CoursesState;
  form: FormState;
}

export interface EnthusiasmState { 
  languageName: string; 
  level: number;
}

export interface CoursesState {
  list: Course[];
}

export interface FormState {
  text: string;
}