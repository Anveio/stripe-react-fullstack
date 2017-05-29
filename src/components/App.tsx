import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Page, Layout } from '@shopify/polaris';
// import Navigation from './Navigation';
// import Home from './Home';

import PageHeader from './Navigation/PageHeader';
import Home from './Home';

interface Props { title: string; }
export default class App extends React.Component<Props, never> {
  render() {
    return (
    <Router>
      <main>
        <PageHeader />
        <Route exact path="/" component={Home} />
      </main>
    </Router>
    );
  }
}