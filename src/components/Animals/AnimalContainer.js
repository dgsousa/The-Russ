import React, { Component } from 'react';
import AnimalList from './AnimalList.js';
import { fetchBirdData } from '../../requests/fetchData.js';

class AnimalContainer extends Component {
  state = {
    birds: []
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const birds = await fetchBirdData();
    this.setState({ birds });
  }

  render() {
    const { selectedAnimal } = this.props;
    return (
      <AnimalList
        animals={ this.state.birds }
        selectedAnimal={ selectedAnimal }
      />
    );
  }
}

export default AnimalContainer;