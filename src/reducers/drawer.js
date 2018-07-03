const initialState = {
  isOpen: false,
};

const drawer = (state = initialState, action) => {
  switch(action.type) {
    case 'OPEN_DRAWER':
      return {
        ...state,
        isOpen: true,
      };
    case 'CLOSE_DRAWER':
      return {
        ...state,
        isOpen: false,
      };
    case 'CHANGE_DRAWER_SELECTION':
      return {
        ...state,
        selection: action.selection,
      }
    default:
      return state;
  }
}

export default drawer;