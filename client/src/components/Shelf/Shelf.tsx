import * as React from 'react';
import { Stack, Card } from '@shopify/polaris';

interface Props {
  items: Product[];
}

const Shelf = ({ items }: Props) => {
  return <Stack>{items.map(item => <Card title={item.name} />)}</Stack>;
};

export default Shelf;
