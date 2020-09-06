import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchSections } from '../actions/index';

class Navbar extends Component {
  displaySubsection = (subSections) => {
    if (subSections) {
      return (
        <ul>
          {subSections.map(subSection => <li key={subSection}>{subSection}</li>)}
        </ul>);
    }
    return null;
  }

  render() {
    const sections = this.props.sections;
    return (
      <div className="navbar-container">
        <div className="navbar">
          <ul>
            {
              Object.keys(sections).map((section) => {
                return (
                  <li key={section}>
                    <Link className="section-link" to={`/${section}`}>{`${section.toUpperCase()}`}</Link>
                    {this.displaySubsection(sections[section])}
                  </li>);
              })
            }
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
