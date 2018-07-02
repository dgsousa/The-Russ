const fish = (state = [], action) => {
  switch(action.type) {
    case 'INIT_FISH':
      return action.fishData;
    default:
      return state;
  }
}

export default fish;