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

class App extends React.Component {
  arrowTimeout;

  state = {
    arrow: false,
  };

  componentDidMount() {
    this.arrowTimeout = setTimeout(() => {
      this.setState({ arrow: true });
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.arrowTimeout);
  }

  render() {
    return (
      <TransitionGroup className={layout}>
        <CSSTransition
          appear
          key={this.props.location.key}
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
          <Switch location={this.props.location}>
            <Route exact path="/" component={HiThere} />
            <Route path="/hello" component={Info} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default withRouter(App);
