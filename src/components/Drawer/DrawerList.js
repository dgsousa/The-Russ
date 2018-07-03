import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const DrawerList = () => (
  <List>
    <ListItem button>
      <ListItemText primary='Birds' />
    </ListItem>
    <ListItem button>
      <ListItemText primary='Fish' />
    </ListItem>
  </List>
)

export default DrawerList;