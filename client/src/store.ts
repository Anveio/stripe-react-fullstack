import { combineReducers, createStore } from 'redux';
import { default as enthusiasm } from './reducers/enthusiasm';
import { default as courses } from './reducers/course';
import { default as addCourse } from './reducers/form';
import { default as signup } from './reducers/auth';

/*
TODO: TypeScript doesn't seem to properly check if the object passed to
combineReducers adheres to the RootState type. You can enter gibberish and it
won't be caught by the compiler. 
*/

const forms = combineReducers<AppForms>({
  addCourse,
  signup
});

const rootReducer = combineReducers<RootState>({
  forms,
  courses,
  enthusiasm
});

const emptyAuthForm = { text: '', error: null };

const store = createStore<RootState>(rootReducer, {
  enthusiasm: {
    level: 1,
    languageName: 'TypeScript'
  },
  courses: {
    list: []
  },
  forms: {
    signup: {
      email: emptyAuthForm,
      username: emptyAuthForm,
      password: emptyAuthForm,
      passwordConf: emptyAuthForm
    },
    addCourse: {
      name: { text: '' }
    }
  }
});

export default store;
