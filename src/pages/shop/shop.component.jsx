import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { fetchCollectionStartAsync } from "./../../redux/shop/shop.action";
import {
  selectIsCollectionFetching,
  selectIsCollectionLoaded,
} from "../../redux/shop/shop.selectors";

import CollectionOverview from "./../../components/collection-overview/collection-overview.component";
import CollectionPage from "./../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import "./shop.styles.scss";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const Shop = ({
  match,
  addCollections,
  isCollectionFetching,
  isCollectionLoaded,
}) => {
  useEffect(() => {
    addCollections();
  }, []);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionOverviewWithSpinner
            isLoading={!isCollectionLoaded}
            {...props}
          />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner
            isLoading={!isCollectionLoaded}
            {...props}
          />
        )}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionLoaded,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addCollections: (collections) =>
      dispatch(fetchCollectionStartAsync(collections)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
