import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { connect } from 'react-redux';
import DrawerList from './DrawerList.js';
import { toggleDrawer } from '../../thunks/componentThunks.js';

const mapStateToProps = (state) => {
  return {
    isOpen: state.drawer.isOpen,
  };
};

const mapDispatchToProps = {
  toggleDrawer,
};

class AppDrawer extends Component {
  render() {
    const {
      isOpen,
      toggleDrawer,
    } = this.props;
    return (
      <Drawer
        anchor='left'
        onClose={ toggleDrawer }
        open={ isOpen }
      >
        <DrawerList />
      </Drawer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppDrawer);