import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { styles } from './HeaderStyles.js';
import { connect } from 'react-redux';
import { toggleDrawer } from '../../thunks/componentThunks.js';

const mapDispatchToProps = {
  toggleDrawer,
};

class Header extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  handleMenuClick = () => {
    const { toggleDrawer } = this.props;
    toggleDrawer();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={ classes.root }>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={ classes.menuButton }
              color="inherit"
              onClick={ this.handleMenuClick }
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              Animals
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

const HeaderWithStyles = withStyles(styles)(Header); 

export default connect(null, mapDispatchToProps)(HeaderWithStyles);