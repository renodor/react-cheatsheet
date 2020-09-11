import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { toggleNavbarSection as toggleNavbarSectionAction } from '../actions/index';

import NavbarSubSections from './navbar_sub_sections';

class NavbarSection extends Component {
  handleClick = () => {
    const { activeNavbarSection, section, toggleNavbarSection } = this.props;
    toggleNavbarSection(activeNavbarSection === section ? null : section);
  }

  render() {
    const {
      section,
      subSections,
      selectedSection,
      activeNavbarSection
    } = this.props;

    return (
      <li key={section}>
        <button type="button" onClick={this.handleClick} aria-expended={activeNavbarSection === section} className="nav-link section-link">{section}</button>
        <NavbarSubSections
          section={section}
          subSections={subSections}
          selectedSection={selectedSection}
          isOpen={activeNavbarSection === section} />
      </li>
    );
  }
}

function mapStateToProps(state) {
  return {
    sections: state.sections,
    activeNavbarSection: state.activeNavbarSection
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    toggleNavbarSection: toggleNavbarSectionAction
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarSection);
