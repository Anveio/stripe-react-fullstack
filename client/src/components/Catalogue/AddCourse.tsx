import * as React from 'react';
import { Layout, Card, FormLayout, TextField, Button } from '@shopify/polaris';
import { Dispatch, connect } from 'react-redux';
import {
  FormAction,
  changeFormText,
  submitForm,
  resetForm
} from 'actions/form';
import { Course, RootState } from 'types';

interface Handlers {
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

const mapState = (state: RootState): Course => ({
  name: state.forms.addCourse.name
});

const mapDispatch = (dispatch: Dispatch<FormAction<Course>>): Handlers => ({
  onChange: (key: keyof Course, value: string) =>
    dispatch(changeFormText<Course>('addCourse', key, value)),
  onSubmit: (payload: Course) => {
    dispatch(submitForm<Course>('addCourse', payload));
    dispatch(resetForm('addCourse'));
  }
});

export default connect(mapState, mapDispatch)(AddCourse);
