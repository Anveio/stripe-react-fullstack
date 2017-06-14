import * as constants from '../constants';

export type CourseAction = AddCourse;

export interface AddCourse {
  type: constants.ADD_COURSE;
  value: Course;
}

export function addCourse(course: Course): AddCourse {
  return {
    type: constants.ADD_COURSE,
    value: {
      name: course.name
    }
  };
}