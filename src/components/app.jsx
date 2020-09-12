import React from 'react';

import Navbar from '../containers/navbar';
import Section from '../containers/section';

const App = ({ match }) => {
  return (
    <div className="app">
      <Navbar selectedSection={match.params.section} />
      <Section sectionName={match.params.section} />
    </div>
  );
};

export default App;
