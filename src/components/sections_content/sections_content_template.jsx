/* eslint-disable max-len, react/jsx-one-expression-per-line, react/no-unescaped-entities */

import React from 'react';
import PrismCode from '../prism_code';

const language = 'language';

const code = {
  variable: ''
};

const SectionName = ({ subSectionName }) => {
  switch (subSectionName) {
    case 'sub-section-name': {
      return (
        <div>
          <p><samp>var</samp> : variable. Scope is global or locall to an entire function (regardless of block scope)</p>
          <p><samp>let</samp> : variable that can be reassigned. Limited to the scope of a the block statement</p>
          <p><samp>const</samp> : variablethat can't be reassigned. (But value it holds can change, for example if its an object)</p>
          <PrismCode code={code.subSection} language={language} />
        </div>
      );
    }
    case 'math': {
      return <div>Hello Sub Section2</div>;
    }
    default: {
      return 'nada';
    }
  }
};

export default SectionName;
