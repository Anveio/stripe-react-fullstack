import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import history from './history';

import registerServiceWorker from './registerServiceWorker';
import '@shopify/polaris/styles.css';

import App from './containers/App';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={props => <App {...props} />} />
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
