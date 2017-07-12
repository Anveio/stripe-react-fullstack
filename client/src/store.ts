import { createStore, compose } from 'redux';
import { persistStore } from 'redux-persist';
import { rootReducer } from './reducers';

const emptyAuthForm = { text: '', error: null };

const blankStore = {
  currentUser: {
    email: 'a@b.com',
    token: ''
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
    login: {
      email: emptyAuthForm,
      password: emptyAuthForm,
      loading: false
    },
    addCourse: {
      name: { text: '' }
    }
  },
  users: {
    list: []
  }
};

// tslint:disable:no-any
// tslint:disable:no-string-literal
let devtools: any = window['devToolsExtension']
  ? window['devToolsExtension']
  : (f: any) => f;

const store = createStore<RootState>(
  rootReducer,
  blankStore,
  compose(devtools())
);

persistStore(store);

export default store;
