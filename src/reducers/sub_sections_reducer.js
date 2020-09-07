import { FETCH_SUB_SECTIONS } from '../actions';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_SUB_SECTIONS: {
      return action.payload;
    }
    default:
      return state;
  }
}
