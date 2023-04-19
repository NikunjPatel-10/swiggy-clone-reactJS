import React from "react";
import "./RestaurantInfo.css";
import { FaLeaf } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

function RestaurantInfo({ restaurantInfo }) {
  return (
    <div className="restaurant-info">
      <div className="restaurant-name">
        <h2 className="heading-text">{restaurantInfo?.name}</h2>

        <p>{restaurantInfo?.cuisines?.join(", ")}</p>
        <p>
          {restaurantInfo?.areaName}, {restaurantInfo?.city}
        </p>
        {restaurantInfo?.veg && (
          <p className="mtop10">
            {" "}
            <FaLeaf color="green" /> Pure Veg{" "}
          </p>
        )}
      </div>
      <div className="restaurant-basics">
        <h4>
          <i className="fa fa-star"></i> {restaurantInfo?.avgRating}{" "}
        </h4>
        <p>{restaurantInfo?.totalRatingsString}</p>
      </div>
    </div>
  );
}

export default RestaurantInfo;
