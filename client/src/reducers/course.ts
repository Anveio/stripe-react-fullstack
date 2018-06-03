import { FormSubmit } from '../actions/form';
import { SUBMIT_FORM } from '../constants';
import { CoursesState, Course } from 'types';

const initialState: CoursesState = {
  list: []
};

export default (state = initialState, action: FormSubmit<Course>) => {
  switch (action.type) {
    case SUBMIT_FORM:
      return {
        ...state,
        list: [...state.list, action.payload]
      };
    default:
      return state;
  }
};
