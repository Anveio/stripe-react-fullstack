import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { blankStore } from './fixtures/store';
import { rootReducer } from '../reducers/';
import history from '../history';

import App from '../containers/App';

import { mockLocalStorage } from './mock/localStorage';

beforeEach(() => {
  mockLocalStorage();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = createStore<RootState>(rootReducer);
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={props => <App {...props} />} />
      </Router>
    </Provider>,
    div
  );
});
