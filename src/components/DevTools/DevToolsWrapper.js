import React from 'react';
import DevTools from './DevTools.js';

const wrapperStyles = {
  height: '100%',
  position: 'absolute',
  right: '0px',
}

const DevToolsWrapper = () => (
  <div style={ wrapperStyles }>
    <DevTools />
  </div>
);

export default DevToolsWrapper;