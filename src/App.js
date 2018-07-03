import React, { Component } from 'react';
import Header from './components/Header/Header.js';
import Drawer from './components/Drawer/Drawer.js';
import AppBody from './components/AppBody/AppBody.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Drawer />
        <AppBody />
      </div>
    );
  }
}

export default App;
