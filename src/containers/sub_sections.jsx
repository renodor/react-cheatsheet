import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchSubSections as actionFetchSubSections } from '../actions/index';

// Sections Contents
import Html from '../components/sections_content/html';
import Css from '../components/sections_content/css';

class SubSections extends Component {
  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    const { sectionName, fetchSubSections } = this.props;
    fetchSubSections(sectionName);
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps) {
    const { sectionName, fetchSubSections } = this.props;
    if (nextProps.sectionName !== sectionName) {
      fetchSubSections(nextProps.sectionName);
    }
  }

  subSectionsMapping = {
    Html,
    Css
  };

  render() {
    const { sectionName, subSections } = this.props;
    const subSectionsArray = Array.from(subSections);
    const sectionNameCapitalized = sectionName.charAt(0).toUpperCase() + sectionName.slice(1);
    const SubSectionContent = this.subSectionsMapping[sectionNameCapitalized];

    return (
      subSectionsArray.map((subSection) => {
        return (
          <div key={subSection} id={subSection} className="sub-section">
            <h2 className="sub-section-title">{subSection}</h2>
            <SubSectionContent subSectionName={subSection} />
          </div>
        );
      })
    );
  }
}

function mapStateToProps(state) {
  return {
    subSections: state.subSections
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchSubSections: actionFetchSubSections
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SubSections);
