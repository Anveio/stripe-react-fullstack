import * as React from 'react';
import About from '../components/About';
import { shallow } from 'enzyme';
import enthusiasmReducer from '../reducers/enthusiasm';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants';
import { Layout, Card, Button } from '@shopify/polaris';
import { renderAppWithState } from './mock/app';

import { blankState } from './fixtures/state';
import { mockLocalStorage } from './mock/localStorage';

// Testing for null type checks are omitted because the TypeScript compiler will catch those errors.

const shallowAboutComponent = () => {
  const props = {
    languageName: 'TypeScript',
    level: 25,
    onIncrement: jest.fn(),
    onDecrement: jest.fn()
  };

  const enzymeWrapper = shallow(<About {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

// To prevent one test from affecting another, we will re-render the app with a fresh state for each test.
const setup = () => {
  const customEnthusiasm = {
    enthusiasm: {
      languageName: 'TypeScript',
      level: 5
    }
  };

  const { store, wrapper } = renderAppWithState(customEnthusiasm);
  const buttons = wrapper.find(About).find(Button);
  return { store, wrapper, buttons };
};

beforeEach(() => {
  mockLocalStorage();
});

describe('About component', () => {
  describe('rendering itself and its children', () => {
    const { enzymeWrapper } = shallowAboutComponent();
    it('renders Layout.AnnotatedSection', () => {
      expect(enzymeWrapper.find(Layout.AnnotatedSection).length).toEqual(1);
    });

    it('renders two Button components', () => {
      expect(enzymeWrapper.find(Button).length).toEqual(2);
    });

    it('renders Card', () => {
      expect(enzymeWrapper.find(Card).length).toEqual(1);
    });
  });

  describe('reducer for enthusiasm counter', () => {
    it('increases level by 1 when passed INCREMENT_ENTHUSIASM', () => {
      expect(
        enthusiasmReducer(
          { level: 1, languageName: 'TypeScript' },
          { type: INCREMENT_ENTHUSIASM }
        )
      ).toEqual({ level: 2, languageName: 'TypeScript' });
    });

    it('decreases level by 1 when passed DECREMENT_ENTHUSIASM', () => {
      expect(
        enthusiasmReducer(
          { level: 2, languageName: 'TypeScript' },
          { type: DECREMENT_ENTHUSIASM }
        )
      ).toEqual({ level: 1, languageName: 'TypeScript' });
    });

    it('does not reduce level below 1 when passed DECREMENT_ENTHUSIASM', () => {
      expect(
        enthusiasmReducer(
          { level: 1, languageName: 'TypeScript' },
          { type: DECREMENT_ENTHUSIASM }
        )
      ).toEqual({ level: 1, languageName: 'TypeScript' });
    });
  });

  describe('clicking buttons', () => {
    it('initializes with the correct state', () => {
      const { store } = setup();
      expect(store.getState().enthusiasm).toEqual({
        languageName: 'TypeScript',
        level: 5
      });
    });

    it('increments level by 1 on "+" button click', () => {
      const { store, buttons } = setup();
      const incrementButton = buttons.at(1);
      incrementButton.simulate('click');

      expect(store.getState().enthusiasm).toEqual({
        languageName: 'TypeScript',
        level: 6
      });
    });

    it('decrements level by 1 on "-" button click', () => {
      const { store, buttons } = setup();
      const decrementButton = buttons.at(0);

      decrementButton.simulate('click');
      expect(store.getState().enthusiasm).toEqual({
        level: 4,
        languageName: 'TypeScript'
      });
    });
  });
});
