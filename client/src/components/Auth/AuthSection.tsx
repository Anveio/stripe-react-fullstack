import * as React from 'react';
import { Layout } from '@shopify/polaris';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

const AuthSection = () => {
  return (
    <React.Fragment>
      <Layout.AnnotatedSection >
        <LoginForm />
      </Layout.AnnotatedSection>
      <Layout.AnnotatedSection>
        <SignupForm />
      </Layout.AnnotatedSection>
    </React.Fragment>
  );
};

export default AuthSection;
