import React from 'react';
import { useSelector } from 'react-redux';
import Animal from './Animal.js';
import './AnimalList.css';

export default function({ selectedAnimal }) {
  const birds = useSelector(state => state.birds);

  if (selectedAnimal === 'fish') {
    return (
      <div>Fish coming soon!</div>
    )
  }

  return(
    <div className='AnimalList'>
      { birds.map((bird) => (
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
  )
}