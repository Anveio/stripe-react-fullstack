import { Course } from './schema';

export interface RootState {
  enthusiasm: EnthusiasmState;
  courses: CoursesState;
}

export interface EnthusiasmState { 
  languageName: string; 
  level: number;
}

export interface CoursesState {
  list: Course[];
}