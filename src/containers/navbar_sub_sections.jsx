import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class NavbarSubSections extends Component {

  componentDidMount() {
    const { section, selectedSection } = this.props;
    console.log(this.navSubLinks.clientHeight);
    if (selectedSection === section && this.navSubLinks) {
      this.navSubLinks.style = 'display: block;';
      this.navSubLinks.parentNode.style = `height: ${this.navSubLinks.clientHeight}px`;
    }
  }

  componentDidUpdate() {
    const { section, selectedSection } = this.props;
    if (selectedSection === section) {
      this.navSubLinks.style = 'display: block;';
      this.navSubLinks.parentNode.style = `height: ${this.navSubLinks.clientHeight}px`;
    } else {
      this.navSubLinks.parentNode.style = 'height: 0';
      setTimeout(() => { this.navSubLinks.parentNode.style = 'display: none;'; }, 500);
    }
  }

  render() {
    const { section, subSections } = this.props;
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
}

export default NavbarSubSections;
