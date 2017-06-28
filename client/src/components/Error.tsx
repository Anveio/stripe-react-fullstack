import * as React from 'react';
import { Banner } from '@shopify/polaris';

export default (error: Error, msg: string) => {
  return <Banner status="critical">{msg}</Banner>;
};
