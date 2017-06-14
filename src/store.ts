import { combineReducers, createStore } from 'redux';
// import { default as EnthusiasmState } from './reducers/index';
import { default as enthusiasmReducer } from './reducers/enthusiasm';
import { default as courseReducer } from './reducers/course';
import { default as addCourse } from './reducers/form';

const rootReducer = combineReducers<RootState>({
  form: addCourse,
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
  },
  form: {
    text: ''
  }
});

export default store;