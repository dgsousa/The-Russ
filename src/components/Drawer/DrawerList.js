import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function DrawerList() {
  return (
    <List>
      <ListItem
        onClick={ () => console.log('TO DO') }
        button
      >
        <ListItemText primary='Birds' />
      </ListItem>
      <ListItem
        onClick={ () => console.log('TO DO') }
        button
      >
        <ListItemText primary='Fish' />
      </ListItem>
    </List>
  );
}

export default DrawerList;