import * as React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers/';
import App from 'components/App';

// tslint:disable

export const renderAppWithState = () => {
  const store = createStore(rootReducer);
  const wrapper = mount(
    <Provider store={store}>
      <Router history>
        <Route path="/" component={(props: any) => <App {...props} />} />
      </Router>
    </Provider>
  );
  return { store, wrapper };
};
