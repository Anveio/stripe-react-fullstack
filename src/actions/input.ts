import * as constants from '../constants';
import * as schema from '../types/schema';
import { Course } from '../types/schema';

export interface FormUpdate {
  type: constants.UPDATE_TEXT_FIELD;
  // key: string;
  value: string;
}

export interface AddCourse {
  type: constants.ADD_COURSE;
  value: schema.Course;
}

export type FormSubmission = AddCourse;

export type FormAction = FormUpdate | AddCourse;

export function changeFormText(value: string): FormUpdate {
  return {
    type: constants.UPDATE_TEXT_FIELD,
    // key,
    value
  };
}

export function addCourse(course: Course): AddCourse {
  return {
    type: constants.ADD_COURSE,
    value: {
      name: course.name
    }
  };
}