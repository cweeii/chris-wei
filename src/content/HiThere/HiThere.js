import * as React from 'react';

import Link from '../../components/link/Link';

import { hiLink, hiSpan } from './HiThere-emotion';

const HiThere = () => (
  <Link className={hiLink} to="/hello">
    <span className={hiSpan}>Hi there!</span>
  </Link>
);

export default HiThere;
