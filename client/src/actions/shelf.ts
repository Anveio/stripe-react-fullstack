import * as constants from '../constants';

export interface ShelfRefreshSuccess {
  type: constants.SHELF_REFRESH_SUCCESS;
  payload: Product[];
}

export type ShelfAction = ShelfRefreshSuccess;
