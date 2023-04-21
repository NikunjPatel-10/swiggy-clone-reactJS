import React from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./RestaurantList.css";
import { Outlet } from "react-router-dom";

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
        {/* <Outlet></Outlet> */}
      </div>
    </div>
  );
}

export default RestaurantList;
