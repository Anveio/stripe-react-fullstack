///<reference path="../types.d.ts"/>

import * as React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { mount } from 'enzyme';
import { combineReducers, createStore } from 'redux';
import App from '../containers/App';
import { default as enthusiasmReducer } from '../reducers/enthusiasm';
import { rootReducer } from '../reducers/';
import history from '../history';

import { blankStore } from './fixtures/store';

export default function renderAppWithState(state: RootState) {
  const store = createStore<RootState>(rootReducer);
  const wrapper = mount(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={props => <App {...props} />} />
      </Router>
    </Provider>
  );
  return { store, wrapper };
}
