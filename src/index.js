import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import DevTools from './components/DevTools/DevTools.js';

const enhancer = compose(
  applyMiddleware(thunk),
  DevTools.instrument()
);

const store = createStore(rootReducer, {}, enhancer);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
