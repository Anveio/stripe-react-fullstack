import * as React from 'react';
import { Layout } from '@shopify/polaris';

import About from '../containers/About';
import CourseList from '../containers/CourseList';
import AddCourse from '../containers/AddCourse';

const Home = () => {
  return (
    <Layout>
      <About />
      <CourseList />
      <AddCourse />
    </Layout>
  );
};

export default Home;
