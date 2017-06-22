import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Page, Layout } from '@shopify/polaris';
// import Navigation from './Navigation';
// import Home from './Home';

import PageHeader from './Navigation/PageHeader';
// import SideNav from './Navigation/SideNav';
import Home from './Home';
import Catalogue from './Catalogue/Catalogue';
// import SignupWrapper from './Auth/SignupWrapper';
import SignupForm from '../containers/SignupForm';
// import AddCourse from '../containers/AddCourse';

export default class App extends React.Component<{}, never> {
  render() {
    return (
    <Router>
      <main>
        <PageHeader />
        {/*<SideNav />*/}
        <Route exact path="/" component={Home} />
        <Route path="/catalogue" component={Catalogue} />
        <Route path="/signup" render={() => { return <SignupForm />; }}/>
      </main>
    </Router>
    );
  }
}