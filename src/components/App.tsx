import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Page, Layout } from '@shopify/polaris';
// import Navigation from './Navigation';
// import Home from './Home';

import PageHeader from './Navigation/PageHeader';
import Home from './Home';
import Catalogue from './Catalogue/Catalogue';

export default class App extends React.Component<{}, never> {
  render() {
    return (
    <Router>
      <main>
        <PageHeader />
        <Route exact path="/" component={Home} />
        <Route exact path="/catalogue" component={Catalogue} />
      </main>
    </Router>
    );
  }
}