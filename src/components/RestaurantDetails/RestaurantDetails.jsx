import React, { useEffect, useState } from "react";
import { Fetch_Restaurant_Details } from "./../../environment";
import { useParams } from "react-router-dom";
import RestaurantInfo from "../RestaurantInfo/RestaurantInfo";
import RestaurantMenu from "../RestaurantMenu/RestaurantMenu";
import "./RestaurantDetails.css";

function RestaurantDetails() {
  const [resInfoData, setResInfoData] = useState({});
  const [resMenu, setResMenu] = useState([]);

  const { resId } = useParams();
  useEffect(() => {
    getRestaurantDetail();
  }, []);

  /**
   * get particular res data using fetch api
   */
  const getRestaurantDetail = async () => {
    const ResDetail = await fetch(Fetch_Restaurant_Details + resId);
    const ResDetailData = await ResDetail.json();

    setResInfoData(ResDetailData.data.cards[0].card.card.info);
    setResMenu(
      ResDetailData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card
        .card.itemCards
    );
    // console.log(RestaurantInfo);
    // console.log("parent", resMenu);
  };
  return (
    <div className="resDetails-Wrapper">
      <div className="resDetail">
        <RestaurantInfo restaurantInfo={resInfoData} />
        <RestaurantMenu resMenu={resMenu} />
      </div>
    </div>
  );
}

export default RestaurantDetails;
