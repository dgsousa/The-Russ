import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import DrawerList from './DrawerList.js';


function DrawerComp({
  onClose,
  isOpen,
  changeSelection,
}) {
  return (
    <Drawer
      anchor='left'
      onClose={ onClose }
      open={ isOpen }
    >
      <DrawerList changeSelection={ changeSelection }/>
    </Drawer>
  );
}

export default DrawerComp;