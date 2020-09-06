import React from 'react';

import Navbar from '../containers/navbar';
import Main from '../containers/main';

const App = (props) => {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <Main selectedSection={props.match.params.section} />
      </div>
    </div>
  );
};

export default App;
