import * as React from 'react';
import { Tabs } from '@shopify/polaris';

export default class Navigation extends React.PureComponent<{}, never> {
  render() {
    return (
      <Tabs
        selected={3}
        tabs={[
          {
            id: 'all-customers',
            title: 'All Customers',
            panelID: 'all-customers-content',
          },
          {
            id: 'accepts-marketing',
            title: 'Accepts Marketing',
            panelID: 'accepts-marketing-content',
          },
          {
            id: 'repeat-customers',
            title: 'Repeat Customers',
            panelID: 'repeat-customers-content',
          },
          {
            id: 'prospects',
            title: 'Prospects',
            panelID: 'prospects-content',
          },
        ]}
      />
    );
  }
}