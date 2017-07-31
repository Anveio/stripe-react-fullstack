import { FormSubmit } from '../actions/form';
import { SUBMIT_FORM } from '../constants';

const initialState: CoursesState = {
  list: []
};

export default (state = initialState, action: FormSubmit<Course>) => {
  let partialState: Partial<CoursesState> | undefined;

  switch (action.type) {
    case SUBMIT_FORM:
      partialState = {
        list: [ ...state.list, action.payload ]
      };
      break;
    default:
      return state;
  }
  return { ...state, ...partialState };
};
