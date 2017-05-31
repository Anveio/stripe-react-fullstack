import * as constants from '../constants';

export interface AddCourse {
  type: constants.ADD_COURSE;
}

export interface RemoveCourse {
  type: constants.REMOVE_COURSE;
}

export type CourseAction = AddCourse | RemoveCourse;

export function addCourse(): AddCourse {
  return {
    type: constants.ADD_COURSE
  };
}

export function removeCourse(): RemoveCourse {
  return {
    type: constants.REMOVE_COURSE
  };
}
