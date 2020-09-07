import React from 'react';
import PrismCode from '../prism_code';

const code = `
console.log('hello');
const myF = () => {
  'yeaaah'
}`;

const Html = (props) => {
  switch (props.subSectionName) {
    case 'naming': {
      return (
        <div>
          Hello Naming
        </div>);
    }
    case 'html-boilerplate': {
      return (
        <div>
          <PrismCode code={code} language="js" plugins={["line-numbers"]} />
        </div>
      );
    }
    default: {
      return 'nada';
    }
  }
};

export default Html;
