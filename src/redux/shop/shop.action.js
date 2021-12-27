import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firbase/firebase.utils";
import { shopActionTypes } from "./shop.types";

export const addCollection = (collections) => ({
  type: shopActionTypes.ADD_COLLECTION_TO_STATE,
  payload: collections,
});

const fetchCollectionStart = () => ({
  type: shopActionTypes.FETCH_COLLECTION_START,
});

const fetchCollectionSucces = (collections) => ({
  type: shopActionTypes.FETCH_COLLECTION_SUCCES,
  payload: collections,
});

const fetchCollectionError = (errorMessage) => ({
  type: shopActionTypes.FETCH_COLLECTION_ERROR,
  payload: errorMessage,
});

export const fetchCollectionStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collections = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionSucces(collections));
      })
      .catch((error) => dispatch(fetchCollectionError(error.message)));
  };
};
