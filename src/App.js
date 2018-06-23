import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Info from './content/Info/Info';
import HiThere from './content/HiThere/HiThere';

import { layout } from './App-emotion';

const App = () => (
  <Router>
    <div className={layout}>
      <Route exact path="/" component={HiThere} />
      <Route path="/hello" component={Info} />
    </div>
  </Router>
);

export default App;
