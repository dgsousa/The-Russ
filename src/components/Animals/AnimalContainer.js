import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AnimalList from './AnimalList.js';
import { initBirdsThunk } from '../../thunks/animalThunks.js';

export default function AnimalContainer() {
  const selectedAnimal = useSelector(state => state.drawer.selection);
  const dispatch = useDispatch();
  useEffect(() => dispatch(initBirdsThunk()), [dispatch]);

  return (
    <AnimalList
      selectedAnimal={ selectedAnimal }
    />
  );
}