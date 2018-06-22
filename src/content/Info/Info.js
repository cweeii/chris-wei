import * as React from 'react';

import { container, name, description, links } from './Info-emotion';

const Info = () => (
  <div className={container}>
    <span className={name}>christopher wei</span>
    <span className={description}>
      I like javascript, video games, and cats
    </span>
    <span className={links} />
  </div>
);

export default Info;
