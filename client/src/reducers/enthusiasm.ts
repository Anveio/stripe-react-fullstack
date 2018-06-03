import { EnthusiasmAction } from '../actions/enthusiasm';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants';
import { EnthusiasmState } from 'types';

const initialState: EnthusiasmState = {
  level: 1,
  languageName: 'TypeScript'
};

const enthusiasm = (
  state: EnthusiasmState = initialState,
  action: EnthusiasmAction
): EnthusiasmState => {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return {
        ...state,
        level: state.level + 1
      };
    case DECREMENT_ENTHUSIASM:
      return {
        ...state,
        level: Math.max(1, state.level - 1)
      };
    default:
      return state;
  }
};

export default enthusiasm;
