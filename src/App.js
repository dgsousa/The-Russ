import React, { Component } from 'react';
import Header from './components/Header/Header.js';
import AppBody from './components/AppBody/AppBody.js';
import DevToolsWrapper from './components/DevTools/DevToolsWrapper.js';

class App extends Component {
  render() {
    return (
      <div>
        <div className='App'>
          <Header />
          <AppBody />
        </div>
        <div>
          <DevToolsWrapper />
        </div>
      </div>
    );
  }
}

export default App;
