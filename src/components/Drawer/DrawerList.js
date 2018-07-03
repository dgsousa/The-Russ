import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { drawerItemSelectedThunk } from '../../thunks/componentThunks.js';

class DrawerList extends Component {
  render() {
    return (
      <List>
        <ListItem
          onClick={ () => drawerItemSelectedThunk('birds') }
          button
        >
          <ListItemText primary='Birds' />
        </ListItem>
        <ListItem
          onClick={ () => drawerItemSelectedThunk('fish') }
          button
        >
          <ListItemText primary='Fish' />
        </ListItem>
      </List>
    )
  }
}

export default DrawerList;