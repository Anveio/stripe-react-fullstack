import { combineReducers, createStore } from 'redux';
// import { default as EnthusiasmState } from './reducers/index';
import { RootState } from './types/states';
import { default as enthusiasmReducer } from './reducers/enthusiasm';
import { default as courseReducer } from './reducers/course';

const rootReducer = combineReducers<RootState>({
  courses: courseReducer,
  enthusiasm: enthusiasmReducer
});

const store = createStore<RootState>(rootReducer, {
  enthusiasm: {
    level: 1,
    languageName: 'TypeScript',
  },
  courses: {
    list: [

    ]
  }
});

export default store;