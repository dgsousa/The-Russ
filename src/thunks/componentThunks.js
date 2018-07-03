import {
  openDrawer,
  closeDrawer,
  changeDrawerSelection,
} from '../actionCreators/componentActions.js';

export const toggleDrawer = () => {
  return (dispatch, getState) => {
    if (getState().drawer.isOpen) {
      dispatch(closeDrawer());
    } else {
      dispatch(openDrawer());
    }
  }
}

export const drawerItemSelectedThunk = (selection) => {
  return (dispatch) => {
    dispatch(changeDrawerSelection({ selection }));
  }
}