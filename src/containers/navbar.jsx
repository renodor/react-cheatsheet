import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { connect } from 'react-redux';

import NavbarSubSections from './navbar_sub_sections';

class Navbar extends Component {
  render() {
    const { sections, selectedSection } = this.props;
    return (
      <div className="navbar-container">
        <div className="navbar">
          <ul>
            {Object.keys(sections).map((section) => {
              return (
                <li key={section}>
                  <Link onClick={this.handleClick} className="nav-link section-link" to={`/${section}`}>{`${section}`}</Link>
                  <NavbarSubSections
                    section={section}
                    subSections={sections[section]}
                    selectedSection={selectedSection} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sections: state.sections
  };
}

export default connect(mapStateToProps)(Navbar);
