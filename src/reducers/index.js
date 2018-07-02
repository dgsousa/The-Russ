import { combineReducers } from 'redux';
import birds from './birds.js';
import fish from './fish.js';

export default combineReducers({
  birds,
  fish
});