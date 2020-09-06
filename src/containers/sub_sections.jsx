import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchSubSections } from '../actions/index';

import HtmlContent from '../components/html_content';
import JavascriptContent from '../components/javascript_content';

class SubSections extends Component {
  componentWillMount() {
    this.props.fetchSubSections(this.props.sectionName);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.sectionName !== this.props.sectionName) {
      this.props.fetchSubSections(nextProps.sectionName);
    }
  }

  subSectionsMapping = {
    html: HtmlContent,
    javascript: JavascriptContent
  };

  render() {
    const subSections = Array.from(this.props.subSections);
    const SubSectionContent = this.subSectionsMapping[this.props.sectionName];
    return (
      subSections.map((subSection) => {
        return (
          <div key={subSection} id={`${this.props.sectionName}-${subSection}`}>
            <h2 className="section-title">{subSection}</h2>
            <div><SubSectionContent subSectionName={subSection} /></div>
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
