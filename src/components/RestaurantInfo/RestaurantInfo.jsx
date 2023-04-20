import React from "react";
import "./RestaurantInfo.css";
import { FaLeaf } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { IconStar } from "@tabler/icons-react";

/**
 * get resInfo using props
 * @param {*} param0
 * @returns
 */
function RestaurantInfo({ restaurantInfo }) {
  return (
    <div className="restaurant-info">
      <div className="restaurant-name">
        <h2 className="heading-text">{restaurantInfo.name}</h2>

        <p>{restaurantInfo?.cuisines?.join(", ")}</p>
        <p>
          {restaurantInfo?.areaName}, {restaurantInfo?.city}
        </p>
        {restaurantInfo?.veg && (
          <p>
            <FaLeaf color="green" /> Pure Veg
          </p>
        )}
      </div>
      <div className="restaurant-basics">
        <h4>
          <IconStar color="green" fill="green" /> {restaurantInfo?.avgRating}{" "}
        </h4>
        <p>{restaurantInfo?.totalRatingsString}</p>
      </div>
    </div>
  );
}

export default RestaurantInfo;
