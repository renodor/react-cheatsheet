import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchSections } from '../actions/index';

class Navbar extends Component {
  componentWillMount() {
    this.props.fetchSections();
  }

  render() {
    return (
      <div className="navbar-container">
        <div className="navbar">
          <ul>
            {
              this.props.sections.map((section) => {
                return <li key={section}><Link className="section-link" to={`/${section}`}>{`${section.toUpperCase()}`}</Link></li>;
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSections }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
