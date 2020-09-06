import React, { Component } from 'react';

import Html from './html';
import Javascript from '../components/javascript';

class Main extends Component {
  sections = {
    html: Html,
    javascript: Javascript
  };

  render() {
    const Section = this.sections[this.props.selectedSection];
    return <Section sectionName={this.props.selectedSection} />;
  }
}

export default Main;
