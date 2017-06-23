import * as React from 'react';
import { Banner } from '@shopify/polaris';

interface Props {
  title: string;
  message: string;
}

export default ({ title, message }: Props) => {
  return <Banner status={'critical'}><p>{message}</p></Banner>;
};
