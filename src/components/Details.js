import React from "react";

import OpenOrClosed from "./OpenOrClosed";

import RestaurantContext from "./RestaurantContext";

const Details = () => (
  <RestaurantContext.Consumer>
    {({ name }) => (
      <>
        <div className="res-name">{name}</div>

        <OpenOrClosed />
      </>
    )}
  </RestaurantContext.Consumer>
);

export default Details;
