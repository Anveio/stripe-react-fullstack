import { combineReducers, createStore } from 'redux';
import { default as enthusiasm } from './reducers/enthusiasm';
import { default as courses } from './reducers/course';
import { default as addCourse } from './reducers/textForm';
import { default as signup } from './reducers/authForm';
import { default as currentUser } from './reducers/auth';
import { default as notifications } from './reducers/notifications';

/*
TODO: TypeScript doesn't seem to properly check if the object passed to
combineReducers adheres to the RootState type. You can enter gibberish as a key
and it won't be caught by the compiler. 
*/

const forms = combineReducers<AppForms>({
  addCourse,
  signup
});

const rootReducer = combineReducers<RootState>({
  notifications,
  currentUser,
  forms,
  courses,
  enthusiasm
});

const emptyAuthForm = { text: '', error: null };

const blankStore = {
  currentUser: {
    account: null
  },
  notifications: {
    fromServer: []
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
};

// tslint:disable:no-any
// tslint:disable:no-string-literal
let devtools: any = window['devToolsExtension']
  ? window['devToolsExtension']()
  : (f: any) => f;

const store = createStore<RootState>(rootReducer, blankStore, devtools);

export default store;
