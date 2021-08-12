import React, { useState, useEffect } from 'react';
import AnimalList from './AnimalList.js';
import { fetchBirdData } from '../../requests/fetchData.js';

function AnimalContainer({ selectedAnimal }) {
  const [ birds, setBirds ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const birds = await fetchBirdData();
      setBirds(birds);
    };
    fetchData();
  }, []);

  return (
    <AnimalList
      animals={ birds }
      selectedAnimal={ selectedAnimal }
    />
  );
  
}

export default AnimalContainer;