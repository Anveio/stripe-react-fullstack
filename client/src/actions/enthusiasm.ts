import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants';

export interface IncrementEnthusiasm {
  type: INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
  type: DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export const incrementEnthusiasm = (): IncrementEnthusiasm => ({
  type: INCREMENT_ENTHUSIASM
});
export const decrementEnthusiasm = (): DecrementEnthusiasm => ({
  type: DECREMENT_ENTHUSIASM
});
