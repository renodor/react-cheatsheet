import React from 'react';

import Navbar from '../containers/navbar';
import Section from './section';

const App = (props) => {
  return (
    <div className="app">
      <Navbar />
      <Section sectionName={props.match.params.section} />
    </div>
  );
};

export default App;
