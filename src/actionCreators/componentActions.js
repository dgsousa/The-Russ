export const openDrawer = () => {
  console.log('what about here?')
  return {
    type: 'OPEN_DRAWER',
  }
};

export const closeDrawer = () => ({
  type: 'CLOSE_DRAWER',
});