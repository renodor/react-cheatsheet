import React from 'react';

const Javascript = (props) => {
  switch (props.subSectionName) {
    case 'variables': {
      return <div>Hello Variables</div>;
    }
    case 'math': {
      return <div>Hello math</div>;
    }
    default: {
      return 'nada';
    }
  }
};

export default Javascript;
