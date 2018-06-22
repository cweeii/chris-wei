import * as React from 'react';

import Link from '../../components/link/Link';

import { hiLink } from './HiThere-emotion';

const HiThere = () => (
  <Link className={hiLink} to="/hello">
    Hi there!
  </Link>
);

export default HiThere;
