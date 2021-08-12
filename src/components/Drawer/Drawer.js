import React from 'react';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import DrawerList from './DrawerList.js';
import { toggleDrawer } from '../../thunks/componentThunks.js';

function mapStateToProps(state) {
  return {
    isOpen: state.drawer.isOpen
  };
}

function DrawerComp({
  isOpen,
  dispatch
}) {
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

export default connect(
  mapStateToProps
)(DrawerComp);