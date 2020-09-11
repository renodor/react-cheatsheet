import React from 'react';
import { connect } from 'react-redux';

import NavbarSection from './navbar_section';

const Navbar = ({ sections, selectedSection }) => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <ul>
          {Object.keys(sections).map((section) => {
            return (
              <NavbarSection
                key={section}
                section={section}
                subSections={sections[section]}
                selectedSection={selectedSection} />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    sections: state.sections
  };
}

export default connect(mapStateToProps)(Navbar);
