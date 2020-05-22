import React from "react";
import "./collection.styles.scss";

import { useParams } from "react-router-dom";

const CollectionPage = ({ match }) => {
  let { collectionId } = match.params;

  return (
    <div>
      <h1>COLLECTION PAGE: {collectionId} </h1>
    </div>
  );
};

export default CollectionPage;
