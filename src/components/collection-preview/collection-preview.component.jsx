import React from "react";
import CollectionItem from "./../collection-item/collection-item.components";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, routeName, items }) => {
  return (
    <div className="collection-preview">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherProps }) => (
            <CollectionItem key={id} {...otherProps}>
              {otherProps.name}
            </CollectionItem>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
