///<reference path="../../types.d.ts"/>

import { createStore } from 'redux';
import { rootReducer } from '../../reducers';

export const rootStore = createStore<RootState>(rootReducer);
