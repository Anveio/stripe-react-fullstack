import { combineReducers } from 'redux';
import { default as enthusiasm } from './enthusiasm';
import { default as courses } from './course';
import { default as forms } from './form';
import { default as authForms } from './formAuth';
import { default as notifications } from './notifications';
import { default as currentUser } from './accountConnection';
import { default as users } from './userList';
import { default as shelf } from './shelf';

/*
TODO: TypeScript doesn't seem to properly check if the object passed to
combineReducers adheres to the RootState type. You can enter gibberish as a key
and it won't be caught by the compiler. 
*/

export const rootReducer = combineReducers<RootState>({
  currentUser,
  notifications,
  forms,
  authForms,
  courses,
  enthusiasm,
  users,
  shelf
});
