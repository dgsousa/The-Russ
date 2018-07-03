import React, { Component } from 'react';
import { connect } from 'react-redux';
import Animal from './Animal.js';
import './AnimalList.css';

const mapStateToProps = (state) => ({
  birds: state.birds,
});

class AnimalList extends Component {
  render() {
    const {
      birds,
      selectedAnimal,
    } = this.props;

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
}

export default connect(mapStateToProps)(AnimalList);