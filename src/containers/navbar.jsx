import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {
  displaySubsection = (section, subSections) => {
    if (subSections) {
      return (
        <ul>
          {subSections.map(subSection => <li key={subSection}><Link to={`/${section}#${section}-${subSection}`}>{subSection}</Link></li>)}
        </ul>);
    }
    return null;
  }

  render() {
    const { sections } = this.props;
    return (
      <div className="navbar-container">
        <div className="navbar">
          <ul>
            {Object.keys(sections).map((section) => {
              return (
                <li key={section}>
                  <Link className="section-link" to={`/${section}`}>{`${section.toUpperCase()}`}</Link>
                  {this.displaySubsection(section, sections[section])}
                </li>);
            })}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sections: state.sections,
  };
}

export default connect(mapStateToProps)(Navbar);
