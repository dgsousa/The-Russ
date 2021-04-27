export const openDrawer = () => ({
  type: 'OPEN_DRAWER',
});

export const closeDrawer = () => ({
  type: 'CLOSE_DRAWER',
});

export const changeDrawerSelection = ({ selection }) => ({
  type: 'CHANGE_DRAWER_SELECTION',
  selection,
});