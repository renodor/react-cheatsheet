import React, { Component } from 'react';

import Html from '../components/html';

class Article extends Component {
  components = {
    html: Html
  };

  render() {
    const SectionName = this.components[this.props.section];
    return <SectionName />;
  }
}

export default Article;
