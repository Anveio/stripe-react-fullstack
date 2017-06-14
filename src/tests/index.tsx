import * as React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { combineReducers, createStore } from 'redux';
import App from '../components/App';
import { default as enthusiasmReducer } from '../reducers/enthusiasm';

export default function renderAppWithState(state: RootState) {
  const rootReducer = combineReducers<RootState>({
    enthusiasm: enthusiasmReducer
  });

  const store = createStore<RootState>(rootReducer, {
    enthusiasm: {
      level: 1,
      languageName: 'TypeScript',
    },
    courses: {
      list: []
    },
    form: {
      text: ''
    }
  });

  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
  return {store, wrapper};
}