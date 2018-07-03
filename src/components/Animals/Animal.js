import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import './Animal.css';

const Animal = ({
  name,
  color,
  wingspan,
  weight,
  image,
}) => (
  <Card className='Card'>
    <CardMedia
      className='Media'
      image={ image }
    />
    <CardContent>
      <h3>{name}</h3>
      <p>
        {`The ${name} is colored ${color}, has a wingspan of ${wingspan} and weighs ${weight}` }
      </p>
    </CardContent>
  </Card>
);

export default Animal;