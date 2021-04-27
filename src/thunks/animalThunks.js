import birdData from '../data/birdData.js';
// import fishData from '../data/fishData.js';
import {
  initBirds,
} from '../actionCreators/birdActions.js';

/*
TODO: Fish page
const getFishData = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(fishData);
  }, 2000);
});
*/

const getBirdData = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(birdData);
  }, 2000);
});

export const initBirdsThunk = () => {
  return async (dispatch) => {
    const birdData = await getBirdData();
    dispatch(initBirds({ birdData }));
  };
};
