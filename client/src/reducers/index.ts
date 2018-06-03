import { combineReducers } from 'redux';
import enthusiasm from './enthusiasm';
import courses from './course';
import forms from './form';
import authForms from './formAuth';
import notifications from './notifications';
import currentUser from './accountConnection';
import users from './userList';
import shelf from './shelf';
import { RootState } from 'types';

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
