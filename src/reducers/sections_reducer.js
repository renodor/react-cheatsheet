import { FETCH_SECTIONS } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_SECTIONS: {
      return action.payload;
    }
    default:
      return state;
  }
}
