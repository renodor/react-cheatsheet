import React, { Component } from 'react';
import Prism from 'prismjs';

class PrismCode extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    const { code, plugins, language } = this.props;
    return (
      <pre className={!plugins ? '' : plugins.join(' ')}>
        <code className={`language-${language}`}>
          {code.trim()}
        </code>
      </pre>
    );
  }
}

export default PrismCode;
