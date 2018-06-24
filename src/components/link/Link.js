import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { cx } from 'emotion';

import { link } from './Link-emotion';

const Link = ({ children, className, isRouterLink, ...rest }) =>
  isRouterLink ? (
    <RouterLink className={cx(link, className)} {...rest}>
      {children}
    </RouterLink>
  ) : (
    <a className={cx(link, className)} {...rest}>
      {children}
    </a>
  );

export default Link;
