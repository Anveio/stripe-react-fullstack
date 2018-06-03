import { SHELF_REFRESH_SUCCESS } from '../constants';
import { Product } from 'types';

export interface ShelfRefreshSuccess {
  readonly type: SHELF_REFRESH_SUCCESS;
  readonly payload: Product[];
}

export type ShelfAction = ShelfRefreshSuccess;
