///<reference path="../../types.d.ts"/>

import * as React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import App from '../../containers/App';
import { default as enthusiasmReducer } from '../../reducers/enthusiasm';
import { rootReducer } from '../../reducers/';
import history from '../../history';

import { blankState } from '../fixtures/state';

export const renderAppWithState = (partial: Partial<RootState> = {}) => {
  const state = { ...blankState, ...partial };
  const store = createStore<RootState>(rootReducer, state);
  const wrapper = mount(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={props => <App {...props} />} />
      </Router>
    </Provider>
  );
  return { store, wrapper };
};
