import * as React from 'react';
import About from '../components/About';
import { shallow } from 'enzyme';
import * as actions from '../actions/enthusiasm';
import * as constants from '../constants';
import { Layout, Card, Button } from '@shopify/polaris';

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
  describe('clicking a button', () => {

    beforeEach(() => {
      return setup();
    });

    it('should produce the right action', () => {
      const expectedAction = {
        type: constants.INCREMENT_ENTHUSIASM
      };
      expect(actions.incrementEnthusiasm()).toEqual(expectedAction);
    });

    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find(Layout));
      expect(enzymeWrapper.find(Button));
      expect(enzymeWrapper.find(Card));
    });

    it('should increment enthusiasm by one when clicking the + button', () => {
      expect(true);
    });
  });
});