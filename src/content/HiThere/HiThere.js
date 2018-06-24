import * as React from 'react';

import Link from '../../components/link/Link';

import { hiLink } from './HiThere-emotion';

const HiThere = () => (
  <Link className={hiLink} isRouterLink to="/hello">
    <span>Hi there!</span>
  </Link>
);

export default HiThere;
