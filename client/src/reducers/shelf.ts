import { ShelfAction } from '../actions/shelf';
import { SHELF_REFRESH_SUCCESS } from '../constants';
import { ShelfState } from 'types';

const initialState: ShelfState = {
  products: []
};

export default (state = initialState, action: ShelfAction): ShelfState => {
  switch (action.type) {
    case SHELF_REFRESH_SUCCESS:
      return {
        products: action.payload
      };
    default:
      return state;
  }
};
