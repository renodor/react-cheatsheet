import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchSubSections } from '../actions/index';

import SubSections from './sub_sections';

class Html extends Component {
  render() {
    return (
      <div className={`${this.props.sectionName}-container`}>
        <h1>{this.props.sectionName}</h1>
        <SubSections sectionName={this.props.sectionName} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    subSections: state.subSections,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSubSections }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Html);

