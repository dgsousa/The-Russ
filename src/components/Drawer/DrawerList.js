import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { drawerItemSelectedThunk } from '../../thunks/componentThunks.js';

const mapDispatchToProps = {
  selectItem: drawerItemSelectedThunk,
};

class DrawerList extends Component {
  buildItemClick = (selection) => () => {
    const { selectItem } = this.props;
    selectItem(selection);
  }

  render() {
    return (
      <List>
        <ListItem
          onClick={ this.buildItemClick('birds') }
          button
        >
          <ListItemText primary='Birds' />
        </ListItem>
        <ListItem
          onClick={ this.buildItemClick('fish') }
          button
        >
          <ListItemText primary='Fish' />
        </ListItem>
      </List>
    )
  }
}

export default connect(null, mapDispatchToProps)(DrawerList);