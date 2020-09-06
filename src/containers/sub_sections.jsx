import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchSubSections } from '../actions/index';

// Sections Contents
import Html from '../components/sections_content/html';
import Javascript from '../components/sections_content/javascript';

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
    Html,
    Javascript
  };

  render() {
    const { sectionName, subSections } = this.props;
    const subSectionsArray = Array.from(subSections);
    const sectionNameCapitalized = sectionName.charAt(0).toUpperCase() + sectionName.slice(1);
    const SubSectionContent = this.subSectionsMapping[sectionNameCapitalized];

    return (
      subSectionsArray.map((subSection) => {
        return (
          <div key={subSection} id={`${sectionName}-${subSection}`}>
            <h2 className="section-title">{subSection}</h2>
            <SubSectionContent subSectionName={subSection} />
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
