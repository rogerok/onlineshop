import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firbase/firebase.utils";

import { addCollection } from "./../../redux/shop/shop.action";

import CollectionOverview from "./../../components/collection-overview/collection-overview.component";
import CollectionPage from "./../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import "./shop.styles.scss";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const Shop = ({ match, addCollections }) => {
  const unsubscribeFromSnapshot = null;

  const [isLoading, setStateLoading] = useState(true);

  useEffect(() => {
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapshot) => {
      const collections = convertCollectionsSnapshotToMap(snapshot);
      addCollections(collections);
      setStateLoading(false);
    });
  });

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={isLoading} {...props} />
        )}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCollections: (collections) => dispatch(addCollection(collections)),
  };
};

export default connect(null, mapDispatchToProps)(Shop);
