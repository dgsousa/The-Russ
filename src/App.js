import React, { useState, useCallback } from 'react';
import Header from './components/Header/Header.js';
import AppBody from './components/AppBody/AppBody.js';

function App() {
  const [isOpen, toggleDrawerState] = useState(false);

  const toggleDrawer = useCallback(() => {
    toggleDrawerState(!isOpen);
  }, [isOpen]);

    return (
      <div>
        <div className='App'>
          <Header onOpen={ toggleDrawer }/>
          <AppBody onClose={ toggleDrawer } isOpen={ isOpen } />
        </div>
      </div>
    );
  
}

export default App;
