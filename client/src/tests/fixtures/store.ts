import { createStore } from 'redux';
import { rootReducer } from '../../reducers';
import { blankState } from './state';

export const blankStore = createStore<RootState>(rootReducer, blankState);
