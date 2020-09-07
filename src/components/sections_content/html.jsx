import React from 'react';

const Html = (props) => {
  switch (props.subSectionName) {
    case 'naming': {
      return (
        <div>
          Hello Naming
        </div>);
    }
    case 'html boilerplate': {
      return <div>Hello Boilerplate</div>;
    }
    default: {
      return 'nada';
    }
  }
};

export default Html;
