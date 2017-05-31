import * as React from 'react';
import { Layout, EmptyState } from '@shopify/polaris';
import { Course } from '../../types/schema';
const emptyImage = require('./empty-state.svg');

export interface Props {
  readonly list: Course[];
  readonly onNewCourse: () => void;
}

const CourseList = (props: Props): JSX.Element => {
  const { list, onNewCourse } = props;

  const emptyCourseListMarkup = (): JSX.Element => {
    return (
      <Layout.AnnotatedSection>
        <EmptyState
          heading="You don't have any courses yet."
          action={{content: 'Add course', onAction: onNewCourse}}
          imageContained={false}
          image={emptyImage}
        >
        <p>Get started by adding a course.</p>
        </EmptyState>
    </Layout.AnnotatedSection>
    );
  };

  const populatedCourseListMarkup = (): JSX.Element => {
    return (
      <div>
        {list.map((course: Course) => course.author )}
      </div>
    );
  };

  return (
    list.length > 0 
    ? populatedCourseListMarkup()
    : emptyCourseListMarkup()
  );
};

export default CourseList;