import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import registerServiceWorker from './registerServiceWorker';
import '@shopify/polaris/styles.css';
import App from 'components/App';
import { AppProvider as PolarisProvider } from '@shopify/polaris';
import { freshHistory } from 'utils/history';
import { Path } from 'constants/routes';

ReactDOM.render(
  <PolarisProvider>
    <Provider store={store}>
      <Router history={freshHistory}>
        <Route path={Path.HOME} component={App} />
      </Router>
    </Provider>
  </PolarisProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
