import * as React from 'react';
import { Page, Layout } from '@shopify/polaris';

import Account from './Account';
import Footer from './Footer';
import About from '../containers/About';

export default class Home extends React.Component<undefined, never> {
  render() {
    return (
      <Page title="Pluralsight Administration">
        <Layout>
          {/*<Navigation />*/}
          {/*<Home />*/}
          <Account />
          <About />
          <Footer />
        </Layout>
      </Page>

    );
  }
}

/*<Layout.AnnotatedSection title="Home">
        <Card sectioned>
          <p>Use this page to manage your Pluralsight courses.</p> 
        </Card> 
      </Layout.AnnotatedSection>*/