import React, { Component } from 'react';
import Prism from 'prismjs';

export class PrismCode extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    const { code, plugins, language } = this.props;
    return (
      <div>
        <pre className={!plugins ? '' : plugins.join(' ')}>
          <code className={`language-${language}`}>
            {code.trim()}
          </code>
        </pre>
      </div>
    );
  }
}

export default PrismCode;
