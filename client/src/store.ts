import { createStore, compose } from 'redux';
import { persistStore } from 'redux-persist';
import { rootReducer } from './reducers';

// tslint:disable:no-any
// tslint:disable:no-string-literal
let devtools: any = window['devToolsExtension']
  ? window['devToolsExtension']
  : (f: any) => f;

const store = createStore<RootState>(rootReducer, compose(devtools()));

persistStore(store);

export default store;
