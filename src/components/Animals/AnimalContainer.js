import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnimalList from './AnimalList.js';
import { initBirdsThunk } from '../../thunks/animalThunks.js';

function mapStateToProps(state) {
  return {
    selectedAnimal: state.drawer.selection
  };
}

class AnimalContainer extends Component {

  componentDidMount() {
    this.props.dispatch(initBirdsThunk());
  }
  render() {
    const { selectedAnimal } = this.props;
    return (
      <AnimalList selectedAnimal={ selectedAnimal }/>
    );
  }
  
}

export default connect(
  mapStateToProps
)(AnimalContainer);