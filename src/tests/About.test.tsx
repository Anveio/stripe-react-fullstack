import * as React from 'react';
import About from '../components/About';
import { shallow } from 'enzyme';
import * as actions from '../actions/enthusiasm';
import enthusiasmReducer from '../reducers';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants';
import { Layout, Card, Button } from '@shopify/polaris';
import renderAppWithState from './index';

// TEsting for null type checks are omitted because the TypeScript compiler will catch those errors.

function setup() {
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
}

describe('About component', () => { 
  describe('rendering itself and its children', () => {
    const { enzymeWrapper } = setup();
    it('renders Layout.AnnotatedSection', () => {
      expect(enzymeWrapper.find(Layout.AnnotatedSection).length).toBe(1);
    });

    it('renders two Button components', () => {
      expect(enzymeWrapper.find(Button).length).toBe(2);
    });

    it('renders Card', () => {
      expect(enzymeWrapper.find(Card).length).toBe(1);
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
    const { store, wrapper} = renderAppWithState({
      enthusiasm: {
        level: 1,
        languageName: 'TypeScript',
      }
    });

    // const { props, enzymeWrapper } = setup();
    const incrementButton = wrapper.find(Button).at(2);
    // const incrementButton = enzymeWrapper.find(Button);

    it('produces the right action', () => {
      const expectedAction = {
        type: INCREMENT_ENTHUSIASM
      };
      expect(actions.incrementEnthusiasm()).toEqual(expectedAction);
    });

    it('increments enthusiasm by one on button click', () => {
      incrementButton.simulate('click');
      expect(store.getState()).toEqual({
        enthusiasm: {
          level: 2,
          languageName: 'TypeScript',
        }
      });
    });
  });
});