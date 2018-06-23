import * as React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'emotion';

import App from './App';

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
