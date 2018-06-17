import * as React from 'react';
import { RootState } from 'types';
import createBrowserHistory from 'history/createBrowserHistory';
import { AppProvider as PolarisProvider } from '@shopify/polaris';
import { createStore } from 'redux';
import { rootReducer } from 'rootReducer';
import { render } from 'react-testing-library';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

export const createPreloadedStore = (preloadedState: Partial<RootState> = {}) =>
  createStore(rootReducer, preloadedState);

export const renderWithProvider = (
  component: JSX.Element,
  preloadedState: Partial<RootState> = {}
) => {
  const store = createPreloadedStore(preloadedState);
  const wrappedUi = (
    <PolarisProvider>
      <Provider store={store}>
        <Router history={createBrowserHistory()}>{component}</Router>
      </Provider>
    </PolarisProvider>
  );
  return {
    ...render(wrappedUi),
    store,
    wrappedUi
  };
};

export const leftClick = { button: 0 };
