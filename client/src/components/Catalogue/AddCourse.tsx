import * as React from 'react';
import { Layout, Card, FormLayout, TextField, Button } from '@shopify/polaris';

export interface Props {
  readonly text: string;
}

export interface Handlers {
  readonly onTextInput: (value: string) => void;
  readonly onAddCourse: (course: Course) => void;
}

const AddCourse = (props: Props & Handlers): JSX.Element => {
  const { text, onTextInput, onAddCourse } = props;

  const handleAddCourse = (): void => {
    const course: Course = {
      name: text
    };
    onAddCourse(course);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    handleAddCourse();
  };

  return (
    <Layout.AnnotatedSection title="Add a course">
      <Card sectioned>
        <FormLayout>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Course name"
              type="text"
              name="add-course"
              value={text}
              autoFocus
              autoComplete
              placeholder="e.g. History 101"
              helpText="Type in the name and number of the course you want to add."
              onChange={onTextInput}
              maxLength={120}
            />
            <Button
              primary
              icon="add"
              onClick={handleAddCourse}
              accessibilityLabel="Add Course"
            >
              Add Course
            </Button>
          </form>
        </FormLayout>
      </Card>
    </Layout.AnnotatedSection>
  );
};

export default AddCourse;
