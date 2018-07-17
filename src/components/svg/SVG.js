import * as React from 'react';

const SVG = ({ children, ...rest }) => (
  <svg className="info-icon" {...rest}>
    {children}
  </svg>
);

export default SVG;
