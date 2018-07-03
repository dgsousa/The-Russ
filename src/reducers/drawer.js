const initialState = {
  isOpen: false,
};

const drawer = (state = initialState, action) => {
  switch(action.type) {
    case 'OPEN_DRAWER':
      return { isOpen: true };
    case 'CLOSE_DRAWER':
      return { isOpen: false };
    default:
      return state;
  }
}

export default drawer;