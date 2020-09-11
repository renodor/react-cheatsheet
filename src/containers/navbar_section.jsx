import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { HashLink as Link } from 'react-router-hash-link';
import { connect } from 'react-redux';

import { toggleNavbarSection } from '../actions/index';

import NavbarSubSections from './navbar_sub_sections';

class NavbarSection extends Component {
  handleClick = () => {
    const { activeNavbarSection, section } = this.props;

    if (activeNavbarSection === section) {
      this.props.toggleNavbarSection(null);
    } else {
      this.props.toggleNavbarSection(section);
    }
  }

  render() {
    const { section, subSections, selectedSection } = this.props;
    return (
      <li key={section}>
        <div onClick={this.handleClick} className="nav-link section-link">{section}</div>
        <NavbarSubSections
          section={section}
          subSections={subSections}
          selectedSection={selectedSection}
          isOpen={this.props.activeNavbarSection === section} />
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
    toggleNavbarSection: toggleNavbarSection
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarSection);
