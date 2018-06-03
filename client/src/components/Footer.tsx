import { FooterHelp, Layout, Link } from '@shopify/polaris';
import * as React from 'react';

export default class Footer extends React.PureComponent<{}, never> {
  render() {
    return (
      <Layout.Section>
        <FooterHelp>
          This web app was made Shovon Hasan. Check out his
          <Link external url="https://github.com/Anveio">
            {' '}
            GitHub
          </Link>, or visit his
          <Link external url="https://www.shovonhasan.com">
            {' '}
            website
          </Link>.
        </FooterHelp>
      </Layout.Section>
    );
  }
}
