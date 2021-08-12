import birdData from '../data/birdData.js';
// import fishData from '../data/fishData.js';

export const fetchBirdData = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(birdData);
  }, 2000);
});
