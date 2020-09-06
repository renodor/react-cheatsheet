import React from 'react';

import Navbar from '../containers/navbar';
import Section from './section';

const App = (props) => {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <Section sectionName={props.match.params.section} />
      </div>
    </div>
  );
};

export default App;
