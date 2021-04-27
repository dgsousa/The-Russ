import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import DrawerList from './DrawerList.js';
import { toggleDrawer } from '../../thunks/componentThunks.js';

function DrawerComp() {
  const isOpen = useSelector(state => state.drawer.isOpen);
  const dispatch = useDispatch();

  return (
    <Drawer
      anchor='left'
      onClose={ () => dispatch(toggleDrawer()) }
      open={ isOpen }
    >
      <DrawerList />
    </Drawer>
  );
}

export default DrawerComp;