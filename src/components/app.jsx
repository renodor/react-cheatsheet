import React from 'react';

import Navbar from './navbar';
import Article from '../containers/article';

const App = (props) => {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <Article section={props.match.params.section} />
      </div>
    </div>
  );
};

export default App;
