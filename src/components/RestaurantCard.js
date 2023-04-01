import React from "react";

import Score from "./Score";

import Details from "./Details";

import RestaurantContext from "./RestaurantContext";

const RestaurantCard = ({ name, isOpen, score }) => {
  return (
    <RestaurantContext.Provider value={{ name, isOpen, score }}>
      <Details />
      <Score />
    </RestaurantContext.Provider>
  );
};

export default RestaurantCard;
