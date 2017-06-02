import * as React from 'react';
import {  EmptyState, Layout, Card } from '@shopify/polaris';
import { Course } from '../../types/schema';
// import AddCourse from './AddCourse';
const emptyImage = require('./empty-state.svg');

export interface Props {
  readonly list: Course[];
  readonly onNewCourse: () => void;
}

const CourseList = (props: Props): JSX.Element => {
  const { list, onNewCourse } = props;

  // const addCourseRedirect = (): void => {
  //   window.location.href = '/catalogue/courses/add';
  // };

  /*const courseCard = (course: Course): JSX.Element => {
    return (
        <Card sectioned>
          Professor: {course.author}
          Starts on {course.dateStart}
          Ends on {course.dateEnd}
        </Card>
      
    )
  }*/

  const emptyCourseListMarkup = (): JSX.Element => {
    return (
      <EmptyState
        heading="You don't have any courses yet."
        action={{content: 'Add course', onAction: onNewCourse}}
        image={emptyImage}
      >
        <p>Get started by adding a course.</p>
      </EmptyState>
    );
  };

  const populatedCourseListMarkup = (): JSX.Element => {
    return (
      <Layout.AnnotatedSection title={'My enrolled courses'}>
        <Card sectioned>
          Hi.
        </Card>
      </Layout.AnnotatedSection>
    );
  };

  return (
    list.length > 0 
    ? populatedCourseListMarkup()
    : emptyCourseListMarkup()
  );
};

export default CourseList;