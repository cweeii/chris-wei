import * as React from 'react';
import { cx } from 'emotion';

import { button } from './Button-emotion';

const Button = ({ children, className, onClick }) => (
  <button className={cx(button, className)} onClick={onClick}>
    {children}
  </button>
);

export default Button;
