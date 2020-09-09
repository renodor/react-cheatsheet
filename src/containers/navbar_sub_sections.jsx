import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { connect } from 'react-redux';

class NavbarSubSections extends Component {
  constructor(props) {
    super(props);

    this.state = { collapsed: false };
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.section === nextProps.selectedSection) {
      this.setState({
        collapsed: true
      });
    } else {
      this.setState({
        collapsed: false
      });
    }
  }

  render() {
    const { section, subSections } = this.props;
    return (
      <ul className={`nav-sub-links ${this.state.collapsed ? 'collapsed' : ''}`}>
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
}

function mapStateToProps(state) {
  return {
    sections: state.sections
  };
}

export default connect(mapStateToProps)(NavbarSubSections);
