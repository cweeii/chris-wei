import * as React from 'react';
import { cx } from 'emotion';

import Link from '../../components/link/Link';
import withMountAnimation from '../../hocs/mount-animation/withMountAnimation';

import { hiLink } from './HiThere-emotion';

const HiThere = ({ mounted }) => (
  <Link className={mounted ? cx(hiLink, 'mounted') : hiLink} to="/hello">
    Hi there!
  </Link>
);

export default withMountAnimation(HiThere);
