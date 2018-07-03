import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { connect } from 'react-redux';
import DrawerList from './DrawerList.js';

const mapStateToProps = (state) => {
  return {
    isOpen: state.drawer.isOpen,
  };
};

class AppDrawer extends Component {
  render() {
    const {
      isOpen,
    } = this.props;
    console
    return (
      <Drawer
        anchor='left'
        open={ isOpen }
      >
        <DrawerList />
      </Drawer>
    );
  }
}

export default connect(mapStateToProps)(AppDrawer);