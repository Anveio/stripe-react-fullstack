import { FormSubmission } from '../actions/input';
import { CoursesState } from '../types/states';
import { ADD_COURSE } from '../constants';
import { Course } from '../types/schema';

const initialState: CoursesState = {
  list: []
};

const generateNewCourse = (course: Course): Course => {
  return {
    name: course.name
    // author: 'Shovon Hasan',
    // dateStart: new Date,
    // dateEnd: new Date
  };
};

const courseReducer = (state: CoursesState = initialState, action: FormSubmission): CoursesState => {
  let partialState: Partial<CoursesState> | undefined;

  switch (action.type) {
    case ADD_COURSE:
      partialState = { list: [generateNewCourse(action.value)]}; break;
    default: return state;
  }

  return { ...state, ...partialState };
};

export default courseReducer;