import * as React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { combineReducers, createStore } from 'redux';
import App from '../components/App';
import { default as enthusiasmReducer } from '../reducers/enthusiasm';
import { rootReducer } from '../reducers/';

import { blankStore } from './fixtures/store';

export default function renderAppWithState(state: RootState) {
  const store = createStore<RootState>(rootReducer, blankStore);
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
  return { store, wrapper };
}
