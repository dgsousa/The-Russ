import React, { Component } from 'react';
import Header from './components/Header/Header.js';
import AppBody from './components/AppBody/AppBody.js';

class App extends Component{
  state = {
    isOpen: false
  };

  toggleDrawer = () => {
    this.setState(() => ({
      isOpen: !this.state.isOpen
    }));
  }

  render() {
    return (
      <div>
        <div className='App'>
          <Header onOpen={ this.toggleDrawer }/>
          <AppBody onClose={ this.toggleDrawer } isOpen={ this.state.isOpen } />
        </div>
      </div>
    );
  }
}

export default App;
