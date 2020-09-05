import React from 'react';

import Navbar from './navbar';
import Article from './article';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <Article />
      </div>
    </div>
  );
};

export default App;
