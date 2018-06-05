import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { rootReducer } from '../rootReducer';

import { mockLocalStorage } from './mock/localStorage';
import App from 'components/App';
import { freshHistory } from 'utils/history';

beforeEach(() => {
  mockLocalStorage();
});

// tslint:disable:no-any

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = createStore(rootReducer);
  ReactDOM.render(
    <Provider store={store}>
      <Router history={freshHistory}>
        <Route path="/" component={App} />
      </Router>
    </Provider>,
    div
  );
});
