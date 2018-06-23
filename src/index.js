import * as React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'emotion';

import Router from './router/Router';

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
  }
`;

ReactDOM.render(<Router />, document.getElementById('root'));
