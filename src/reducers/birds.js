const birds = (state = [], action) => {
  switch(action.type) {
    case 'INIT_BIRD':
      return action.birdData;
    default:
      return state;
  }
};

export default birds;