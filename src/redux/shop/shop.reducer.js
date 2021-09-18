import { shopActionTypes } from "./shop.types";

const INITIAL_STATE = {
  collections: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.ADD_COLLECTION_TO_STATE:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
