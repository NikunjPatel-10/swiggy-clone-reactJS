import React from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./RestaurantList.css";

/**
 * get data via props from home page
 * @param {*} param0
 * @returns
 */
function RestaurantList({ restaurantList }) {
  return (
    <div className="resListContainer">
      <div className="restaurantList">
        {restaurantList.map((item) => {
          return <RestaurantCard key={item.id} cardData={item.data} />;
        })}
      </div>
    </div>
  );
}

export default RestaurantList;
