import * as React from 'react';
import About from '../components/About';
import { shallow } from 'enzyme';
import enthusiasmReducer from '../reducers';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants';
import { Layout, Card, Button } from '@shopify/polaris';
import renderAppWithState from './index';

// TEsting for null type checks are omitted because the TypeScript compiler will catch those errors.

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
          { level: 1, languageName: 'TypeScript'},
          { type: INCREMENT_ENTHUSIASM })
      ).toEqual(
        { level: 2, languageName: 'TypeScript'}
      );
    });

    it('decreases level by 1 when passed DECREMENT_ENTHUSIASM', () => {
      expect(
        enthusiasmReducer(
          { level: 2, languageName: 'TypeScript'},
          { type: DECREMENT_ENTHUSIASM })
      ).toEqual(
        { level: 1, languageName: 'TypeScript'}
      );
    });

    it('does not reduce level below 1 when passed DECREMENT_ENTHUSIASM', () => {
      expect(
        enthusiasmReducer (
          { level: 1, languageName: 'TypeScript'},
          { type: DECREMENT_ENTHUSIASM })
      ).toEqual(
        { level: 1, languageName: 'TypeScript'}
      );
    });
  });

  describe('clicking a button', () => {
    const initialState = { enthusiasm: {
        level: 3,
        languageName: 'TypeScript',
      }
    };

    // To prevent one test from affecting another, we will re-render the app with a fresh state for each test.
    const setup = () => {
      const { store, wrapper } = renderAppWithState(initialState);
      const buttons = wrapper.find(About).find(Button);
      return { store, wrapper, buttons }
    };

    it('initializes with the correct state', () => {
      const { store } = setup();
      expect(store.getState()).toEqual(initialState);
    })

    it('increments level by 1 on "+" button click', () => { 
      const { store, buttons } = setup();
      const incrementButton = buttons.at(1);    
      incrementButton.simulate('click');

      expect(store.getState()).toEqual({
        enthusiasm: {
          level: 4,
          languageName: 'TypeScript',
        }
      });
    });

    it('decrements level by 1 on "-" button click', () => {
      const { store, buttons } = setup();
      const decrementButton = buttons.at(0);

      decrementButton.simulate('click');
      expect(store.getState()).toEqual({
        enthusiasm: {
          level: 2,
          languageName: 'TypeScript',
        }
      });
    });
  });
});