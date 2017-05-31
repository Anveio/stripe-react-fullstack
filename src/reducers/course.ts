import { CourseAction } from '../actions/course';
import { CoursesState } from '../types/states';
import { ADD_COURSE, REMOVE_COURSE } from '../constants';
import { Course } from '../types/schema';

const initialState: CoursesState = {
  list: []
};

const generateNewCourse = (): Course => {
  return {
    author: 'Shovon Hasan',
    dateStart: new Date,
    dateEnd: new Date
  };
};

const courseReducer = (state: CoursesState = initialState, action: CourseAction): CoursesState => {
  let partialState: Partial<CoursesState> | undefined;

  switch (action.type) {
    case ADD_COURSE:
      partialState = { list: [generateNewCourse()]}; break;
    case REMOVE_COURSE:
      partialState = { list: [] }; break;
    default: return state;
  }

  return { ...state, ...partialState };
};

export default courseReducer;