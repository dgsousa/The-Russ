import React from 'react';
import DevToolsWrapper from '../DevTools/DevToolsWrapper.js';
import styles from './AppBody.css';

const AppBody = () => (
  <div className={ styles.AppBody }>
    <div></div>
    <DevToolsWrapper /> 
  </div>
);

export default AppBody;
