import { createStore, compose } from 'redux';
import { persistStore } from 'redux-persist';
import { rootReducer } from './rootReducer';

// tslint:disable:no-string-literal
const devtools = window['__REDUX_DEVTOOLS_EXTENSION__']
  ? window['__REDUX_DEVTOOLS_EXTENSION__']()
  : compose;

const store = createStore(rootReducer, devtools);

persistStore(store);

export default store;
