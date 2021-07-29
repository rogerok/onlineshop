import React from "react";
import CollectionItem from "./../collection-item/collection-item.components";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item}>
              {item.name}
            </CollectionItem>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
