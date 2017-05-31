import { EnthusiasmAction } from '../actions/enthusiasm';
import { EnthusiasmState } from '../types/states';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants';

const initialState: EnthusiasmState = {
  level: 1,
  languageName: 'TypeScript'
};

const enthusiasm = (state: EnthusiasmState = initialState, action: EnthusiasmAction): EnthusiasmState => {
  let partialState: Partial<EnthusiasmState> | undefined;

  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      partialState = { level: state.level + 1 }; break;
    case DECREMENT_ENTHUSIASM:
      partialState = { level: Math.max(1, state.level - 1) }; break;
    default: return state;
  }

  return { ...state, ...partialState };
};

export default enthusiasm;