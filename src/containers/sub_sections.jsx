import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchSubSections } from '../actions/index';

import HtmlSubSections from '../components/html_sub_sections';

class SubSections extends Component {
  componentWillMount() {
    this.props.fetchSubSections(this.props.sectionName);
  }

  render() {
    const subSections = Array.from(this.props.subSections);
    return (
      subSections.map((subSection) => {
        return (
          <div key={subSection} id={`${this.props.sectionName}-${subSection}`}>
            <h2 className="section-title">{subSection}</h2>
            <div><HtmlSubSections subSectionName={subSection} /></div>
          </div>
        );
      })
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

export default connect(mapStateToProps, mapDispatchToProps)(SubSections);
