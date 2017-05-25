import * as React from 'react';
import { Layout, Card } from '@shopify/polaris';

export default class Home extends React.Component<never, never> {
  render() {
    return (
      <Layout.AnnotatedSection title="Home">
        <Card sectioned>
          <p>Use this page to manage your Pluralsight courses.</p> 
        </Card> 
      </Layout.AnnotatedSection>
    );
  }
}