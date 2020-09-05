import sections from '../data/sections';

export const FETCH_SECTIONS = 'FETCH_SECTIONS';

export function fetchSections() {
  return {
    type: FETCH_SECTIONS,
    payload: sections
  };
}

