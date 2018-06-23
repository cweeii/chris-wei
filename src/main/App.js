import * as React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Info from '../content/Info/Info';
import HiThere from '../content/HiThere/HiThere';

import { layout } from './App-emotion';

const App = ({ location }) => (
  <div className={layout}>
    <Switch location={location}>
      <Route exact path="/" component={HiThere} />
      <Route path="/hello" component={Info} />
    </Switch>
  </div>
);

export default withRouter(App);
