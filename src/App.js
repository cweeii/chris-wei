import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Info from './content/Info/Info';
import HiThere from './content/HiThere/HiThere';
import Button from './components/button/Button';
import Link from './components/link/Link';

import { layout, container, name, description, links } from './App-emotion';

const App = () => (
  <Router>
    <div className={layout}>
      <Route exact path="/" component={HiThere} />
      <Route path="/hello" component={Info} />
    </div>
  </Router>
);
// <div className={layout}>
//   {!this.state.isButtonPressed ? (
//     <Button className={hiButton} onClick={this.onClick}>
//       Hi there!
//     </Button>
//   ) : (
//     <div className={container}>
//       <span className={name}>christopher wei</span>
//       <span className={description}>
//         I like javascript, video games, and cats
//       </span>
//       <span className={links} />
//     </div>
//   )}
// </div>

export default App;
