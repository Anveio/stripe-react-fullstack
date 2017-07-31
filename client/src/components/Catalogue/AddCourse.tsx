import * as React from 'react';
import { Layout, Card, FormLayout, TextField, Button } from '@shopify/polaris';

export interface Handlers {
  readonly onChange: (key: keyof Course, value: string) => void;
  readonly onSubmit: (course: Course) => void;
}

const AddCourse = ({ name, onChange, onSubmit }: Course & Handlers) => {
  const handleAddCourse = (): void => {
    onSubmit({ name });
  };

  const updateField = (key: keyof Course) => (value: string) => {
    onChange(key, value);
  };

  const watchForEnter = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.charCode === 13) {
      event.preventDefault();
      handleAddCourse();
    }
  };

  return (
    <Layout.AnnotatedSection title="Add a course">
      <Card sectioned>
        <FormLayout>
          <div onKeyPress={watchForEnter}>
            <TextField
              label="Course name"
              type="text"
              name="add-course"
              value={name}
              placeholder="e.g. History 101"
              helpText="Type in the name and number of the course you want to add."
              onChange={updateField('name')}
              maxLength={120}
            />
          </div>
          <Button
            primary
            submit
            icon="add"
            onClick={handleAddCourse}
            accessibilityLabel="Add Course"
          >
            Add Course
          </Button>
        </FormLayout>
      </Card>
    </Layout.AnnotatedSection>
  );
};

export default AddCourse;
