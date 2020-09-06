import React from 'react';

import SubSections from '../containers/sub_sections';

const Section = (props) => {
  return (
    <div className={`${props.sectionName}-container`}>
      <h1>{props.sectionName}</h1>
      <SubSections sectionName={props.sectionName} />
    </div>
  );
};

export default Section;

