import * as React from 'react';
import { RootState } from 'types';
import createBrowserHistory from 'history/createBrowserHistory';
import { AppProvider as PolarisProvider } from '@shopify/polaris';
import { createStore } from 'redux';
import { rootReducer } from 'rootReducer';
import { render } from 'react-testing-library';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

export const renderWithProvider = (
  component: JSX.Element,
  preloadedState: Partial<RootState> = {}
) => {
  const store = createStore(rootReducer, preloadedState);
  return {
    ...render(
      <PolarisProvider>
        <Provider store={store}>
          <Router history={createFreshHistory()}>{component}</Router>
        </Provider>
      </PolarisProvider>
    ),
    store
  };
};

export const createFreshHistory = createBrowserHistory;

export const leftClick = { button: 0 };
