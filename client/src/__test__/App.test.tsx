import * as React from 'react';
import { render } from 'react-testing-library';
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

it('renders without crashing', () => {
  const store = createStore(rootReducer);
  render(
    <Provider store={store}>
      <Router history={freshHistory}>
        <Route path="/" component={App} />
      </Router>
    </Provider>
  );
});
