import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { styles } from './HeaderStyles.js';
import { useDispatch } from 'react-redux';
import { toggleDrawer } from '../../thunks/componentThunks.js';

const useStyles = makeStyles(styles);

function Header() {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <div>
      <AppBar position='absolute'>
        <Toolbar>
          <IconButton
            className={ classes.menuButton }
            color="inherit"
            onClick={ () => dispatch(toggleDrawer()) }
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
  );
}

export default Header;