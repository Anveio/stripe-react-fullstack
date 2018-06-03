import * as React from 'react';
import * as ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import registerServiceWorker from './registerServiceWorker';
import '@shopify/polaris/styles.css';
import App from 'components/App';
import { AppProvider as PolarisProvider } from '@shopify/polaris';

// tslint:disable:no-any

const history = createBrowserHistory();

ReactDOM.render(
  <PolarisProvider>
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={(props: any) => <App {...props} />} />
      </Router>
    </Provider>
  </PolarisProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
