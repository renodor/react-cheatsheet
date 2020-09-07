import React from 'react';

import Navbar from '../containers/navbar';
import Section from './section';

const App = ({ match }) => {
  return (
    <div className="app">
      <Navbar />
      <Section sectionName={match.params.section} />
    </div>
  );
};

export default App;
