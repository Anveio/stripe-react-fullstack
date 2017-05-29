import { combineReducers, createStore } from 'redux';
// import { default as EnthusiasmState } from './reducers/index';
import { RootState } from './types/index';
import { default as enthusiasmReducer } from './reducers';

const rootReducer = combineReducers<RootState>({
  enthusiasm: enthusiasmReducer
});

const store = createStore<RootState>(rootReducer, {
  appName: 'Pluralsight Administration',
  enthusiasm: {
    level: 1,
    languageName: 'TypeScript',
  }
});

export default store;