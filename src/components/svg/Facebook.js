import * as React from 'react';

import SVG from './SVG';

const Facebook = ({ color = '#FFFFFF', width = '30' }) => (
  <SVG width={width} viewBox="0 0 30 30">
    <path
      d="M28.344 0H1.656C.741 0 0 .741 0 1.656v26.688C0 29.259.741 30 1.656 30h14.369V18.398h-3.897v-4.54h3.897v-3.342c0-3.875 2.366-5.985 5.823-5.985a32.099 32.099 0 0 1 3.494.178V8.76h-2.384c-1.881 0-2.245.894-2.245 2.206v2.892h4.497l-.586 4.54h-3.91V30h7.63c.915 0 1.656-.741 1.656-1.656V1.656C30 .741 29.259 0 28.344 0z"
      fill={color}
      fillRule="nonzero"
    />
  </SVG>
);

export default Facebook;
