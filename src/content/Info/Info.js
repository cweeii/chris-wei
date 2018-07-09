import * as React from 'react';

import Links from './Links';

import { container, name, description } from './Info-emotion';

const Info = () => (
  <div className={container}>
    <span className={name}>christopher wei</span>
    <span className={description}>
      I like javascript, video games, and cats
    </span>
    <Links />
  </div>
);

export default Info;
