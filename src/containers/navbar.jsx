import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { connect } from 'react-redux';

import NavBarSubSections from './navbar_sub_sections';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
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
                  <Link onClick={this.handleClick} className="nav-link section-link" to={`/${section}`}>{`${section}`}</Link>
                  <NavBarSubSections selectedSection={this.props.selectedSection} section={section} subSections={sections[section]} />
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
