import React from 'react';
import Drawer from '../Drawer/Drawer.js';
import AnimalContainer from '../Animals/AnimalContainer.js';
import './AppBody.css';

export default function() {
  return (
    <div className='AppBody'>
      <AnimalContainer />
      <Drawer />
    </div>
  )
};
