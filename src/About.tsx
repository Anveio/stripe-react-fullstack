import * as React from 'react';
import { Layout, Card } from '@shopify/polaris';

export default class About extends React.PureComponent<{}, never> {
  render() {
    return (
      <Layout.AnnotatedSection title="About">
        <Card sectioned>
          <p>We're using React, Redux, Shopify Polaris components and a variety of other helpful libraries.</p>
          <p>It was written in TypeScript using the TypeScript React starter template.</p>
        </Card>
      </Layout.AnnotatedSection>
    );
  }
}