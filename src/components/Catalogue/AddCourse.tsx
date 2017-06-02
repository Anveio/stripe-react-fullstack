import * as React from 'react';
import { Layout, Card, FormLayout, TextField } from '@shopify/polaris';

export interface Props {
  readonly text: string;
  readonly onTextInput: () => void;
}

const AddCourse = ({text, onTextInput}: Props): JSX.Element => {
  return (
    <Layout.AnnotatedSection title="Add a course">
      <Card sectioned>
        <FormLayout>
          <TextField
            onChange={onTextInput}
            value={text}
            name="add-course"
            label="Add course"
            maxLength={120}
          />
        </FormLayout>
      </Card>
    </Layout.AnnotatedSection>
  );
};

export default AddCourse;