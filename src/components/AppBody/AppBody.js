import React, { useState } from 'react';
import Drawer from '../Drawer/Drawer.js';
import AnimalContainer from '../Animals/AnimalContainer.js';
import './AppBody.css';

function AppBody({ onClose, isOpen }) {
  const [ selectedAnimal, changeAnimalSelection ] = useState('birds');

  return (
    <div className='AppBody'>
      <AnimalContainer selectedAnimal={ selectedAnimal } />
      <Drawer
        onClose={ onClose }
        isOpen={ isOpen }
        changeSelection={ changeAnimalSelection }
      />
    </div>
  );
}

export default AppBody;