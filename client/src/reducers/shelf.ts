import { ShelfAction } from '../actions/shelf';
import { SHELF_REFRESH_SUCCESS } from '../constants';

const initialState: ShelfState = {
  products: []
};

export default (state = initialState, action: ShelfAction): ShelfState => {
  let partialState: Partial<ShelfState> | undefined;

  switch (action.type) {
    case SHELF_REFRESH_SUCCESS:
      partialState = {
        products: action.payload
      };
      break;
    default:
      return state;
  }

  return { ...state, ...partialState };
};
