import * as React from 'react';
import { Layout, Card, FormLayout, TextField } from '@shopify/polaris';

export interface Props {
  readonly text: string;
  readonly onTextInput: (value: string) => void;
  // readonly onAddCourse: () => void;
}

/*class AddCourse extends React.Component<Props, never> {
  // private watchForEnter: (ev: KeyboardEvent) => void;
  constructor(props: Props) {
    super(props);

    // this.watchForEnter = (ev: KeyboardEvent): void => {
    //   if (ev.keyCode === 13) {
    //     ev.preventDefault();
    //     this.props.onAddCourse();
    //   }
    // }
  }

  render() {
    return (
      <Layout.AnnotatedSection title="Add a course">
      <Card sectioned>
        <FormLayout>
          <TextField
            onChange={this.props.onTextInput}
            value={this.props.text}
            name="add-course"
            label="Add course"
            maxLength={120}
          />
        </FormLayout>
      </Card>
    </Layout.AnnotatedSection>
    );
  }
}*/

// export interface Props {
//   readonly text: string;
//   readonly onTextInput: (key: string, value: string) => void;
// }

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

/*class AddCourse extends React.Component<Props, null> {
  private changeBody: (ev: Event) => void;
  constructor(props: Props) {
    super(props);

    const updateFieldEvent = (key: string) => 
      (ev: Event): void => 
        this.props.onTextInput(key, (ev.target as HTMLInputElement).value);
    
    this.changeBody = updateFieldEvent('body');
  }

  render() {
    return (
      <Layout.AnnotatedSection title="Add a course">
      <Card sectioned>
        <FormLayout>
          <TextField
            onChange={this.changeBody()}
            value={this.props.text}
            name="add-course"
            label="Add course"
            maxLength={120}
          />
        </FormLayout>
      </Card>
    </Layout.AnnotatedSection>
    );
  }
}*/

export default AddCourse;