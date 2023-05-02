import React from "react";
import { Restaurant_img } from "../../environment";
import { Link } from "react-router-dom";
import { IconStar } from "@tabler/icons-react";
import classes from "./RestaurantCard.module.css";
function RestaurantCard({ cardData }) {
  // display the color according to ratingType
  let ratingType;
  if (cardData.avgRating >= 4.0) {
    ratingType = "green";
  } else if (cardData.avgRating < 4.0 && cardData.avgRating > 3.0) {
    ratingType = "yellow";
  } else {
    ratingType = "red";
  }
  return (
    <Link to={"/restaurant/" + cardData.id} key={cardData.id}>
      <div className={classes.card}>
        <img src={Restaurant_img + cardData.cloudinaryImageId} />
        <div>
          <h5 className={classes.resName}>{cardData.name}</h5>
          <p className={classes.resAdd}>{cardData.cuisines.join(",")}</p>
        </div>
        <div className={classes.resInfo}>
          {cardData.avgRating && (
            <div className={classes.resInfo}>
              <IconStar size={14} color={ratingType} />
              <p>{cardData.avgRating}</p>
            </div>
          )}
          <p> {cardData.lastMileTravelString}</p>
          <p> {cardData.costForTwoString}</p>
        </div>
      </div>
    </Link>
  );
}

export default RestaurantCard;
