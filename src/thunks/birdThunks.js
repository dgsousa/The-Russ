import birdData from '../data/birdData.js';
import {
  initBirds,
} from '../actionCreators/birdActions.js';

const getBirdData = () => setTimeout(() => {
  return birdData
}, 2000);

export const initBirdsThunk = () => {
  return async (dispatch) => {
    const birdData = await getBirdData();
    dispatch(initBirds({ birdData }));
  }
}