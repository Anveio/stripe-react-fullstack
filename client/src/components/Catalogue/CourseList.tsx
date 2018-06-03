import * as React from 'react';
import { EmptyState, Layout, Card } from '@shopify/polaris';
import { connect } from 'react-redux';
import { RootState, Course } from 'types';
const emptyImage = require('../empty-state.svg');

interface Props {
  readonly list: Course[];
}

const CourseList = ({ list }: Props) => {
  const emptyCourseListMarkup = () => {
    return (
      <Layout.AnnotatedSection title={'My enrolled courses'}>
        <Card sectioned>
          <EmptyState
            heading="You don't have any courses yet."
            action={{ content: 'Add course' }}
            image={emptyImage}
          >
            <p>Get started by adding a course.</p>
          </EmptyState>
        </Card>
      </Layout.AnnotatedSection>
    );
  };

  const populatedCourseListMarkup = () => {
    return (
      <Layout.AnnotatedSection title={'My enrolled courses'}>
        <Card sectioned>{list.map(course => course.name)}</Card>
      </Layout.AnnotatedSection>
    );
  };

  return list.length > 0
    ? populatedCourseListMarkup()
    : emptyCourseListMarkup();
};

const mapStateToProps = (rootState: RootState) => ({
  list: rootState.courses.list
});

export default connect(mapStateToProps)(CourseList);
