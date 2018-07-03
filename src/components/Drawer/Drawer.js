import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { styles } from './DrawerStyles.js';
import { connect } from 'react-redux';

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
      />
    );
  }
}

export default connect(mapStateToProps)(AppDrawer);