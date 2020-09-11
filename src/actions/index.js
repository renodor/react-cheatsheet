import sections from '../data/sections';

export const FETCH_SECTIONS = 'FETCH_SECTIONS';
export const FETCH_SUB_SECTIONS = 'FETCH_SUB_SECTIONS';
export const TOGGLE_NAVBAR_SECTION = 'TOGGLE_NAVBAR_SECTION';

export function fetchSections() {
  return {
    type: FETCH_SECTIONS,
    payload: sections
  };
}

export function fetchSubSections(sectionName) {
  return {
    type: FETCH_SUB_SECTIONS,
    payload: sections[sectionName]
  };
}

export function toggleNavbarSection(sectionName) {
  return {
    type: TOGGLE_NAVBAR_SECTION,
    payload: sectionName
  };
}
