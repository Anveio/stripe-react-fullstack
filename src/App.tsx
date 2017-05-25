import * as React from 'react';
import { Page, Layout } from '@shopify/polaris';

import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Account from './Account';
import Footer from './Footer';

export default class App extends React.Component<never, never> {

  readonly primaryAction = {
    content: 'Save',
    disabled: true 
  };

  readonly secondaryActions = [
    {content: 'Duplicate'},
    {content: 'View on your store'}
  ];

  render() {
    return (
      <Page title="Pluralsight Administration">
        <Layout>
          <Navigation />
          <Home />
          <Account />
          <About />
          <Footer />
        </Layout>
      </Page>
    );
  }
}