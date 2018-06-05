import * as React from 'react';
import { Layout } from '@shopify/polaris';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

const AuthLayout = () => {
  return (
    <React.Fragment>
      <Layout.AnnotatedSection title={'Log in to your account.'}>
        <LoginForm />
      </Layout.AnnotatedSection>
      <Layout.AnnotatedSection
        title={'Create an account.'}
        description={'Signing up takes just a few seconds.'}
      >
        <SignupForm />
      </Layout.AnnotatedSection>
    </React.Fragment>
  );
};

export default AuthLayout;
