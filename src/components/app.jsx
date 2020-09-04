import React from 'react';

import Navbar from './navbar';
import Html from './html';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <Html />
      </div>
    </div>
  );
};

export default App;
