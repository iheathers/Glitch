import _ from "lodash";

import {
  CREATE_STREAM,
  DELETE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      //console.log(state);
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case CREATE_STREAM:
      console.log(state);
      return { ...state, [action.payload.id]: action.payload };

    case FETCH_STREAM:
      //console.log(state);
      return { ...state, [action.payload.id]: action.payload };

    case EDIT_STREAM:
      console.log(state);
      return { ...state, [action.payload.id]: action.payload };

    case DELETE_STREAM:
      console.log(state);
      return _.omit(state, action.payload);
    default:
        return state
  }
};
