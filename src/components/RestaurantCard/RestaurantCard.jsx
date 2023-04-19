import React from "react";
import { Restaurant_img } from "../../environment";
import { Link } from "react-router-dom";
// import { IconStar } from "@tabler/icons-react";
import "./RestaurantCard.css";
function RestaurantCard({ cardData }) {
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
      <div className="card">
        <img src={Restaurant_img + cardData.cloudinaryImageId} />
        <div>
          <h5 className="resName">{cardData.name}</h5>
          <p className="resAdd">{cardData.cuisines.join(",")}</p>
        </div>
        <div>
          {cardData.avgRating && (
            <div className="resInfo">
              {/* <IconStar size={14} color={ratingType} /> */}
              <p className="ratings + ratingType">{cardData.avgRating}</p>
              <p> {cardData.lastMileTravelString}</p>
              <p> {cardData.costForTwoString}</p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default RestaurantCard;
