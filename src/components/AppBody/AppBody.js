import React from 'react';
import DevToolsWrapper from '../DevTools/DevToolsWrapper.js';
import AnimalContainer from '../Animals/AnimalContainer.js';
import './AppBody.css';

const AppBody = () => (
  <div className='AppBody'>
    <AnimalContainer />
    <DevToolsWrapper /> 
  </div>
);

export default AppBody;
