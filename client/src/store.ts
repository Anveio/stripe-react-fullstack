import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { rootReducer } from './rootReducer';
import { devtools } from 'utils/config';

const store = createStore(rootReducer, devtools);

persistStore(store);

export default store;
