import { Button, Card, Layout } from '@shopify/polaris';
import * as React from 'react';

// import { enthusiasm } from '../reducers';
class Props {
  readonly languageName: string;
  readonly level: number;
  readonly onIncrement: () => void;
  readonly onDecrement: () => void;
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