import * as React from 'react';
import { Page, Layout } from '@shopify/polaris';
import CourseList from '../../containers/CourseList';
import Footer from '../Footer';

export interface Props {
  // courses: string[];
}

const Catalogue = () => {
  return (
    <Page title="Catalogue">
      <Layout>
        <CourseList />
      </Layout>
      <Footer />
    </Page>
  );
};

export default Catalogue;