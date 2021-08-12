import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import DrawerList from './DrawerList.js';


function DrawerComp({
  onClose,
  isOpen,
}) {
  return (
    <Drawer
      anchor='left'
      onClose={ onClose }
      open={ isOpen }
    >
      <DrawerList />
    </Drawer>
  );
}

export default DrawerComp;