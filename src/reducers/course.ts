import { CourseAction } from '../actions/course';
import { ADD_COURSE } from '../constants';

const initialState: CoursesState = {
  list: []
};

const generateNewCourse = (course: Course): Course => {
  return {
    name: course.name
  };
};

const courseReducer = (state: CoursesState = initialState, action: CourseAction): CoursesState => {
  let partialState: Partial<CoursesState> | undefined;

  switch (action.type) {
    case ADD_COURSE:
      partialState = { 
        list: state.list.concat(generateNewCourse(action.value)) 
      }; break;
    default: return state;
  }
  return { ...state, ...partialState };
};

export default courseReducer;