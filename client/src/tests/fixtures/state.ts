const emptyAuthForm = { text: '', error: null };

export const blankState: RootState = {
  currentUser: {
    email: '',
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