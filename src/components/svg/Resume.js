import * as React from 'react';

import SVG from './SVG';

const Resume = ({ color = '#FFFFFF', width = '22' }) => (
  <SVG width={width} viewBox="0 0 22 30">
    <path
      d="M13.52 0a.917.917 0 0 0-.082.02H2.263A2.272 2.272 0 0 0 0 2.282v25.05A2.68 2.68 0 0 0 2.668 30h16.651a2.68 2.68 0 0 0 2.668-2.668V8.616a.667.667 0 0 0 0-.266v-.183a.648.648 0 0 0-.182-.468L14.368.204a.638.638 0 0 0-.465-.183h-.202A.624.624 0 0 0 13.52 0zM2.262 1.324h10.67v5.438a2.38 2.38 0 0 0 2.365 2.383h5.395v18.187c0 .761-.61 1.365-1.374 1.365H2.668a1.362 1.362 0 0 1-1.375-1.365V2.282c0-.538.427-.958.97-.958zm11.964.611l5.86 5.906h-4.79a1.052 1.052 0 0 1-.761-.311 1.069 1.069 0 0 1-.31-.768V1.935zM5.82 14.36v1.303h10.347v-1.303H5.82zm0 2.606v1.304h10.347v-1.304H5.82zm0 2.607v1.304h10.347v-1.304H5.82zm0 2.607v1.304h5.82v-1.304H5.82z"
      fill={color}
      fillRule="nonzero"
    />
  </SVG>
);

export default Resume;
