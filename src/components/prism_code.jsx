import React, { Component } from 'react';
import Prism from 'prismjs';

export class PrismCode extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    const { code, language } = this.props;
    return (
      <pre>
        <code className={`language-${language}`}>
          {code.trim()}
        </code>
      </pre>
    );
  }
}

export default PrismCode;
