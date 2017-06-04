import * as React from 'react';
import { Layout, Card, FormLayout, TextField, Button } from '@shopify/polaris';
// import { Layout, Card } from '@shopify/polaris';
// import { reduxForm } from 'redux-form';
import { Course } from '../../types/schema';

export interface Props {
  readonly text: string;
  readonly onTextInput: (value: string) => void;
  readonly onAddCourse: (course: Course) => void;
}

const AddCourse = ({text, onTextInput, onAddCourse}: Props): JSX.Element => {
  // const watchForEnter = (ev: KeyboardEvent) => {
  //   if (ev.keyCode === 13) {
  //     ev.preventDefault();
  //     onAddCourse();
  //   }
  // };

  // const action = { 
  //   onAction: onAddCourse,
  //   content: 'Add Course',
  //   accessibilityLabel: 'Finish adding course'
  // };

  const submitForm = (): void => {
    const course: Course = {
      name: text
    };
    onAddCourse(course);
  };

  return (
    <Layout.AnnotatedSection title="Add a course">
      <Card sectioned>
        <form>
          <FormLayout>
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
              onClick={submitForm}
              accessibilityLabel="Add Course"
            > Add Course</Button>
          </FormLayout>
        </form>
      </Card>
    </Layout.AnnotatedSection>
  );
};

// const AddCourseForm = reduxForm({
//   form: 'addCourse'
// })(AddCourse);

export default AddCourse;

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
}

/*const AddCourse = ({text, onTextInput, onAddCourse}: Props): JSX.Element => {
  // const updateFieldEvent = (key: string) => 
  //     (ev: Event): void => 
  //       onTextInput((ev.target as HTMLInputElement).value);
  
  // const changeBody = updateFieldEvent('body');

  // const watchForEnter = (ev: KeyboardEvent) => {
  //   if (ev.keyCode === 13) {
  //     ev.preventDefault();
  //     onAddCourse();
  //   }
  // };

  return (
    <Layout.AnnotatedSection title="Add a course">
      <Card sectioned>
        <form>
          <fieldset className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Enter tags"
            />
          </fieldset>
          <button
            className="btn btn-lg pull-xs-right btn-primary"
            type="button"
          >
            Publish Article
          </button>  
        </form>
      </Card>
    </Layout.AnnotatedSection>
  );
};*/