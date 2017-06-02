import { FormUpdate } from '../actions/input';
import { FormState } from '../types/states';
import { UPDATE_TEXT_FIELD } from '../constants';

const initialState: FormState = {
  text: ''
};

const formUpdateReducer = (state: FormState = initialState, action: FormUpdate): FormState => {
  let partialState: Partial<FormState> | undefined;

  switch (action.type) {
    case UPDATE_TEXT_FIELD:
      partialState = { text: action.value }; break;
    default: return state;
  }

  return { ...state, ...partialState };
};

export default formUpdateReducer;