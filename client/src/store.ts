import { combineReducers, createStore } from 'redux';
import { default as enthusiasm } from './reducers/enthusiasm';
import { default as courses } from './reducers/course';
import { default as addCourse } from './reducers/textForm';
import { default as signup } from './reducers/authForm';
import { default as currentUser } from './reducers/auth';

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
  currentUser,
  forms,
  courses,
  enthusiasm
});

const emptyAuthForm = { text: '', error: null };

const store = createStore<RootState>(rootReducer, {
  currentUser: {
    account: null
  },
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
      passwordConf: emptyAuthForm,
      loading: false
    },
    addCourse: {
      name: { text: '' }
    }
  }
});

export default store;
