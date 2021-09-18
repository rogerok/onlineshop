import { shopActionTypes } from "./shop.types";

export const addCollection = (collections) => ({
  type: shopActionTypes.ADD_COLLECTION_TO_STATE,
  payload: collections,
});
