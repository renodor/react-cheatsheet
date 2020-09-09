import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const NavbarSubSections = ({ section, subSections, selectedSection }) => {
  if (section === selectedSection) {
    return (
      <ul className="nav-sub-links">
        {subSections.map((subSection) => {
          return (
            <li key={subSection}>
              <Link className="nav-link sub-section-link" to={`/${section}#${subSection}`}>{subSection}</Link>
            </li>
          );
        })}
      </ul>
    );
  }
  return null;
};

export default NavbarSubSections;
