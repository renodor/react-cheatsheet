import React from 'react';
import SubSections from '../containers/sub_sections';

const Section = ({ sectionName }) => {
  return (
    <div id="main" className={`section ${sectionName}-container`}>
      <h1>{sectionName}</h1>
      <SubSections sectionName={sectionName} />
    </div>
  );
};

export default Section;
