import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import DevTools from './DevTools.js';
import './DevTools.css';

const DevToolsWrapper = () => (
  <Drawer
    variant='permanent'
    anchor='right'
  >
    <div className='DevTools'>
      <DevTools />
    </div>
  </Drawer>
);

export default DevToolsWrapper;