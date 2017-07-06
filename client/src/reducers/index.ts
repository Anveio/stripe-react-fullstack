import { combineReducers } from 'redux';
import { default as enthusiasm } from './enthusiasm';
import { default as courses } from './course';
import { default as addCourse } from './textForm';
import { default as signup } from './signupForm';
import { default as login } from './loginForm';
import { default as notifications } from './notifications';
import { default as currentUser } from './accountConnection';
import { default as users } from './userList';

/*
TODO: TypeScript doesn't seem to properly check if the object passed to
combineReducers adheres to the RootState type. You can enter gibberish as a key
and it won't be caught by the compiler. 
*/

const forms = combineReducers<AppForms>({
  signup,
  login,
  addCourse
});

export const rootReducer = combineReducers<RootState>({
  currentUser,
  notifications,
  forms,
  courses,
  enthusiasm,
  users
});
