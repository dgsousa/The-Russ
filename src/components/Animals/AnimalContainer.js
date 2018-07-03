import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnimalList from './AnimalList.js';
import { initBirdsThunk } from '../../thunks/animalThunks.js';

const mapStateToProps = (state) => ({
  selectedAnimal: state.drawer.selection,
});

const mapDispatchToProps = {
  initBirdsThunk,
};

class AnimalContainer extends Component {

  componentDidMount() {
    const { initBirdsThunk } = this.props;
    initBirdsThunk();
  }

  render() {
    const { selectedAnimal } = this.props;
    return (
      <div>
        <AnimalList selectedAnimal={ selectedAnimal } />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimalContainer);