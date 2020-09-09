/* eslint-disable max-len, react/jsx-one-expression-per-line, react/no-unescaped-entities */

import React from 'react';
import PrismCode from '../prism_code';
import { InlineCode as Ic } from '../inline_code';

const language = 'css';

const code = {
  subSection: ''
};

const Css = ({ subSectionName }) => {
  switch (subSectionName) {
    case 'sub-section-name': {
      return (
        <div>
          <p>Hello Sub section1</p>
          <Ic code="inline-code" />
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

export default Css;
