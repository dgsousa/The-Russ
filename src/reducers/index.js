import { combineReducers } from 'redux';
import birds from './birds.js';
import fish from './fish.js';
import drawer from './drawer.js';

export default combineReducers({
  birds,
  fish,
  drawer,
});