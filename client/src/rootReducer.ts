import { combineReducers } from 'redux';
import authForms from './reducers/formAuth';
import currentUser from './reducers/currentUser';
import { RootState } from 'types';

export const rootReducer = combineReducers<RootState>({
  currentUser,
  authForms
});
