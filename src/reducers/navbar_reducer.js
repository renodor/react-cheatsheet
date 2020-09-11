import { TOGGLE_NAVBAR_SECTION } from '../actions';

export default function (state = null, action) {
  switch (action.type) {
    case TOGGLE_NAVBAR_SECTION: {
      return action.payload;
    }
    default:
      return state;
  }
}
