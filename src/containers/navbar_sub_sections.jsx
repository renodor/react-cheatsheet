import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class NavbarSubSections extends Component {
  componentWillReceiveProps(nextProps) {
    const { section, subSections, selectedSection } = this.props;
    if (nextProps.selectedSection === section && this.navSubLinks) {
      this.navSubLinks.parentNode.style = `height: ${this.navSubLinks.clientHeight}px`;
    }
  }

  render() {
    const { section, subSections, selectedSection } = this.props;
    if (section === selectedSection) {
      return (
        <div className="navbar-sub-sections">
          <ul ref={(navSubLinks) => { this.navSubLinks = navSubLinks; }} className="nav-sub-links">
            {subSections.map((subSection) => {
              return (
                <li key={subSection}>
                  <Link className="nav-link sub-section-link" to={`/${section}#${subSection}`}>{subSection}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
    else {
      return null;
    }
  }
}

export default NavbarSubSections;
