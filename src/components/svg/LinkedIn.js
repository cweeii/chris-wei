import * as React from 'react';

const LinkedIn = ({ color = '#FFFFFF', height = '30px', width = '30px' }) => (
  <svg width={width} height={height}>
    <g fill={color} fillRule="nonzero">
      <path d="M9.29 25V11.632H5V25h4.29zM7.304 9.609c1.429 0 2.319-1.022 2.319-2.304C9.599 6 8.733 5 7.325 5 5.918 5 5.006 6.001 5.006 7.305c0 1.282.89 2.304 2.264 2.304h.034zm12.746 1.717c-2.273 0-3.25 1.282-3.874 2.173v-1.861h-4.295v13.36h4.295v-7.61c0-.391.031-.78.147-1.055.313-.78 1.016-1.586 2.203-1.586 1.555 0 2.179 1.197 2.179 2.945v7.305H25v-7.805c.004-4.006-2.123-5.867-4.95-5.867v.001z" />
      <path d="M27.603 0H2.563C1.196 0 0 .986 0 2.336v25.092C0 28.788 1.197 30 2.562 30h25.032C28.968 30 30 28.782 30 27.428V2.335C30.012.985 28.97 0 27.603 0zm-.248 27.509H2.742a.239.239 0 0 1-.241-.243V2.657c0-.085.08-.156.156-.156h24.697c.08 0 .156.08.156.156v24.695c0 .07-.07.157-.156.157h.001z" />
    </g>
  </svg>
);

export default LinkedIn;
