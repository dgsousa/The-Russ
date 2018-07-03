import React, { Component } from 'react';
import Header from './components/Header/Header.js';
import Drawer from './components/Drawer/Drawer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Drawer />
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
