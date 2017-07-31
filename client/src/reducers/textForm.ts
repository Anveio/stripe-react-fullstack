import { FormAction } from '../actions/form';
import { UPDATE_FIELD_TEXT, RESET_TEXT_FIELD } from '../constants';

const initialState: Course = {
  name: ''
};

export default (state = initialState, action: FormAction<Course>): Course => {
  let partialState: Partial<Course> | undefined;

  switch (action.type) {
    case UPDATE_FIELD_TEXT:
      partialState = {
        [action.key]: action.value
      };
      break;
    case RESET_TEXT_FIELD:
      partialState = {
        [action.key]: ''
      };
      break;
    default:
      return state;
  }

  return { ...state, ...partialState };
};
