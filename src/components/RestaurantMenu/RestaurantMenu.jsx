import React from "react";
import { Restaurant_img } from "./../../environment";
import { FaRegStopCircle, FaRegCaretSquareUp } from "react-icons/fa";
import "./RestaurantMenu.css";

function RestaurantMenu({ resMenu }) {
  console.log(resMenu);
  return (
    <div className="restaurant-menu">
      {Object.values(resMenu).map((item) => (
        <div className="menu-items" key={item.card.info?.id}>
          <div className="item-details">
            <div className="item-extras">
              {/* Check for veg/non veg */}
              {item.card.info?.itemAttribute?.vegClassifier === "NONVEG" ? (
                <FaRegCaretSquareUp className="nonveg" size="1.25rem" />
              ) : (
                <FaRegStopCircle className="veg" size="1.25rem" />
              )}
              {/* Check for Bestsellers */}
              {item?.card?.info?.ribbon?.text === "Bestseller" && (
                <span className="bestseller">
                  <i className="fa fa-star"></i> Bestseller
                </span>
              )}
            </div>

            <h4>{item.card.info?.name}</h4>

            <p>₹{item.card.info?.price / 100}</p>
            <span className="item-desc">{item.card.info?.description}</span>
          </div>
          <div className="item-img">
            {!item.card.info?.imageId ? null : (
              <img src={Restaurant_img + item.card.info?.imageId} />
            )}
            {/* <div className="cart-action">
              <ItemQuantity item={item.card.info} key={item.card.info.id} />
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default RestaurantMenu;