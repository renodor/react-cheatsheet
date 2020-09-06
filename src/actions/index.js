import sections from '../data/sections';

export const FETCH_SECTIONS = 'FETCH_SECTIONS';
export const FETCH_SUB_SECTIONS = 'FETCH_SUB_SECTIONS';

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
