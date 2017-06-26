import * as React from 'react';
import { Layout } from '@shopify/polaris';
import CourseList from '../../containers/CourseList';

export interface Props {
  // courses: string[];
}

const Catalogue = () => {
  return (
    <Layout>
      <CourseList />
    </Layout>
  );
};

export default Catalogue;
