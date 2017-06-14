import * as constants from '../constants';
import * as schema from '../types/schema';
import { Course } from '../types/schema';

export type CourseAction = AddCourse;

export interface AddCourse {
  type: constants.ADD_COURSE;
  value: schema.Course;
}

export function addCourse(course: Course): AddCourse {
  return {
    type: constants.ADD_COURSE,
    value: {
      name: course.name
    }
  };
}