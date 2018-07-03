import {
  openDrawer,
  closeDrawer,
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