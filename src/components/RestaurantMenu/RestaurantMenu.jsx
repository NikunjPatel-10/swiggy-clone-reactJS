import React, { useEffect, useState } from "react";
import { Restaurant_img } from "./../../environment";
import { IconSquareRoundedFilled } from "@tabler/icons-react";
import "./RestaurantMenu.css";

function RestaurantMenu({ resMenu }) {
  // console.log("chid", resMenu);

  resMenu.map((item) => {
    console.log(item.card.info);
  });
  // console.log(resInfo);
  // console.log(resMenu[1].card.card.itemcards[0].card.info
  return (
    <>
      {resMenu.map((item) => {
        return (
          <div className="foodMenu-Wrapper">
            <div>
              {/* show red and green icon according to the vegClassifier */}
              <p className="">
                {item.card.info.itemAttribute.vegClassifier === "NONVEG" ? (
                  <IconSquareRoundedFilled size={20} className="nonVeg" />
                ) : (
                  <IconSquareRoundedFilled size={20} className="veg" />
                )}
              </p>
              <h4>{item.card.info.name}</h4>
              <p>₹{item.card.info.price / 100}</p>
              <p className="food-description">{item.card.info.description}</p>
            </div>
            <div className="foodItem-wrapper">
              <figure className="foodImgWrapper">
                <img src={Restaurant_img + item.card.info.imageId} />{" "}
              </figure>
              <button className="btn-add">ADD</button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default RestaurantMenu;
