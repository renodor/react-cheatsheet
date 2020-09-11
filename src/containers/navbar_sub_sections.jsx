import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class NavbarSubSections extends Component {
  componentDidMount() {
    const { isOpen } = this.props;
    if (isOpen) {
      this.navSubLinks.parentNode.style = `height: ${this.navSubLinks.clientHeight}px`;
    }
  }

  componentDidUpdate() {
    const { isOpen } = this.props;
    if (isOpen) {
      this.navSubLinks.parentNode.style = `height: ${this.navSubLinks.clientHeight}px`;
    } else {
      this.navSubLinks.parentNode.style = 'height: 0';
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
