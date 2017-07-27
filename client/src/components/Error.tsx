import * as React from 'react';
import { Banner } from '@shopify/polaris';

const Error = (error: Error, msg: string) => {
  return (
    <Banner status="critical">
      {msg}
    </Banner>
  );
};

export default Error