// import { enthusiasm } from '../reducers';
import * as React from 'react';
import { Layout, Card, Button } from '@shopify/polaris';

class Props {
  readonly languageName: string;
  readonly level?: number;
  readonly onIncrement?: () => void;
  readonly onDecrement?: () => void;
}

const About = ({ languageName, level = 1, onIncrement, onDecrement }: Props) => {
  return (
    <Layout.AnnotatedSection title="About">
        <Card sectioned>
          <p>Language: {languageName} Enthusiasm: {level}</p>
          <Button onClick={onDecrement}>-</Button>
          <Button onClick={onIncrement}>+</Button>
          <p>We're using React, Redux, Shopify Polaris components and a variety of other helpful libraries.</p>
          <p>It was written in TypeScript using the TypeScript React starter template.</p>
        </Card>
      </Layout.AnnotatedSection>
  );
};

export default About;

/*export default class About extends React.PureComponent<Props, never> {
  render() {
    if (this.props.level && this.props.level <= 0) {
      throw new Error('Expected enthusiasm level to be greater than 0.');
    }

    return (
      <Layout.AnnotatedSection title="About">
        <Card sectioned>
          <p>Enthusiasm: {this.props.level}</p>
          <Button onClick={this.props.onDecrement}>-</Button>
          <Button onClick={this.props.onIncrement}>+</Button>
          <p>We're using React, Redux, Shopify Polaris components and a variety of other helpful libraries.</p>
          <p>It was written in TypeScript using the TypeScript React starter template.</p>
        </Card>
      </Layout.AnnotatedSection>
    );
  };
}*/