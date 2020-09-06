import React from 'react';

const HtmlSubSections = (props) => {
  switch (props.subSectionName) {
    case 'naming': {
      return <div>Hello Naming</div>;
    }
    case 'HTML Boilerplate': {
      return <div>Hello Boilerplate</div>;
    }
    default: {
      return 'nada';
    }
  }
};

export default HtmlSubSections;
