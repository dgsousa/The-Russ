import React, { Component } from 'react';
import Drawer from '../Drawer/Drawer.js';
import AnimalContainer from '../Animals/AnimalContainer.js';
import './AppBody.css';

class AppBody extends Component {
  state = {
    selectedAnimal: 'birds'
  };

  changeAnimalSelection(selection) {
    this.setState({
      selectedAnimal: selection
    });
  }

  render() {
    const { onClose, isOpen } = this.props;
    return (
      <div className='AppBody'>
        <AnimalContainer selectedAnimal={ this.state.selectedAnimal } />
        <Drawer
          onClose={ onClose }
          isOpen={ isOpen }
          onChange={ this.changeAnimalSelection }
        />
      </div>
    );
  }
}

export default AppBody;