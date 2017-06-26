import { FormSubmit } from '../actions/form';
import { SUBMIT_FORM } from '../constants';

const initialState: CoursesState = {
  list: []
};

const generateNewCourse = (course: Course): Course => {
  return {
    name: course.name
  };
};

export default (
  state: CoursesState = initialState,
  action: FormSubmit
): CoursesState => {
  let partialState: Partial<CoursesState> | undefined;

  switch (action.type) {
    case SUBMIT_FORM:
      partialState = {
        list: state.list.concat(generateNewCourse(action.value))
      };
      break;
    default:
      return state;
  }
  return { ...state, ...partialState };
};
