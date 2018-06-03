import * as React from 'react';
import { Stack, Card } from '@shopify/polaris';
import { Product } from 'types';

interface Props {
  items: Product[];
}

const Shelf = ({ items }: Props) => {
  return (
    <Stack>
      {items.map(item => <Card key={item.name} title={item.name} />)}
    </Stack>
  );
};

export default Shelf;
