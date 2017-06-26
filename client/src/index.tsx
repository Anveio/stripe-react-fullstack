import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import registerServiceWorker from './registerServiceWorker';
import '@shopify/polaris/styles.css';

import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App /> 
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
