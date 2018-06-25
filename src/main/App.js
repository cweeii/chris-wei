import * as React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Info from '../content/Info/Info';
import HiThere from '../content/HiThere/HiThere';

import {
  layout,
  appear,
  appearActive,
  enter,
  enterActive,
  exit,
  exitActive,
} from './App-emotion';

const App = ({ location }) => (
  <TransitionGroup className={layout}>
    <CSSTransition
      appear
      key={location.key}
      classNames={{
        appear,
        appearActive,
        enter,
        enterActive,
        exit,
        exitActive,
      }}
      timeout={2000}
    >
      <Switch location={location}>
        <Route exact path="/" component={HiThere} />
        <Route path="/hello" component={Info} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
);

export default withRouter(App);
