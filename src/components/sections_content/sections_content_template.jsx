/* eslint-disable max-len, react/jsx-one-expression-per-line, react/no-unescaped-entities */

import React from 'react';
import PrismCode from '../prism_code';

const language = 'language';

const code = {
  subSection: ''
};

const SectionName = ({ subSectionName }) => {
  switch (subSectionName) {
    case 'sub-section-name': {
      return (
        <div>
          <p>Hello Sub section1</p>
          <samp>"inline-code"</samp>
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
