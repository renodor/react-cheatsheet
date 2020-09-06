import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchSubSections } from '../actions/index';

class Html extends Component {
  componentWillMount() {
    this.props.fetchSubSections(this.props.sectionName);
  }

  render() {
    return (
      <div className="html-container">
        <h1>{this.props.sectionName}</h1>
        <div className="sub-section" id="html-naming">
          <h2 className="sub-section-title">{this.props.subSections[1]}</h2>
        </div>
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

