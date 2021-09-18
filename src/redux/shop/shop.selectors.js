import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopItems = createSelector(
  [selectShop],
  (shop) => shop.collections
);

// we got all keys from the object in the array format
// After that we got keys of our collections and after that
// we map() over of array keys
export const selectCollectionForPreview = createSelector(
  [selectShopItems],
  (collections) =>
    collections
      ? Object.keys(collections).map((collection) => collections[collection])
      : []
);

// we normalized data here.
export const selectCollection = (collectionUrlParam) =>
  createSelector([selectShopItems], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );
