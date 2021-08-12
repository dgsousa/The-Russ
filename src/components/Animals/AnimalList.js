import React from 'react';
import Animal from './Animal.js';
import './AnimalList.css';

function AnimalList({ selectedAnimal, animals }) {
  if (selectedAnimal === 'fish') {
    return (
      <div>Fish coming soon!</div>
    );
  }

  return (
    <div className='AnimalList'>
      { animals.map((bird) => (
        <Animal
          key={ bird.id }
          name={ bird.name }
          image={ bird.image }
          color={ bird.color }
          wingspan={ bird.wingspan }
          weight={ bird.weight }
        />
      ))}
    </div>
  );
}

export default AnimalList;