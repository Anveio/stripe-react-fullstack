import * as React from 'react';
import { Page, Layout } from '@shopify/polaris';

import Account from './Account';
import Footer from './Footer';
import About from '../containers/About';

const Home = () => {
  return (
    <Page title="Pluralsight Administration">
      <Layout>
        <Account />
        <About />
      </Layout>
      <Footer />
    </Page>
  );
};

export default Home;

/*<Layout.AnnotatedSection title="Home">
        <Card sectioned>
          <p>Use this page to manage your Pluralsight courses.</p> 
        </Card> 
      </Layout.AnnotatedSection>*/