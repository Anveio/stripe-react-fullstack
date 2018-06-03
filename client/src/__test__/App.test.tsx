import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { rootReducer } from '../reducers/';

import { mockLocalStorage } from './mock/localStorage';
import App from 'components/App';
beforeEach(() => {
  mockLocalStorage();
});

// tslint:disable:no-any

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = createStore(rootReducer);
  ReactDOM.render(
    <Provider store={store}>
      <Router history>
        <Route path="/" component={(props: any) => <App {...props} />} />
      </Router>
    </Provider>,
    div
  );
});
