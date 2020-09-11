import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { connect } from 'react-redux';

import NavbarSubSections from './navbar_sub_sections';

class NavbarSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
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
          isOpen={this.state.isOpen} />
      </li>
    );
  }
}

function mapStateToProps(state) {
  return {
    sections: state.sections
  };
}

export default connect(mapStateToProps)(NavbarSection);
