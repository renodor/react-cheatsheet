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
        <button type="button" onClick={this.handleClick} is-open={(activeNavbarSection === section).toString()} className="nav-link section-link">
          <span>{section}</span>
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
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
