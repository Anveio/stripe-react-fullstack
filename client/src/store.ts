import { combineReducers, createStore } from 'redux';
import { default as enthusiasmReducer } from './reducers/enthusiasm';
import { default as courseReducer } from './reducers/course';
import { default as addCourse } from './reducers/form';

/*
TODO: TypeScript doesn't seem to properly check if the object passed to
combineReducers adheres to the RootState type. You can enter gibberish and it
won't be caught by the compiler. 
*/

const rootReducer = combineReducers<RootState>({
  forms: addCourse,
  courses: courseReducer,
  enthusiasm: enthusiasmReducer
});

const emptyForm = { text: '', errors: [] };

const store = createStore<RootState>(rootReducer, {
  enthusiasm: {
    level: 1,
    languageName: 'TypeScript',
  },
  courses: {
    list: []
  },
  forms: {
    signup: {
      username: emptyForm,
      password: emptyForm
    },
    addCourse: emptyForm
  }
});

export default store;