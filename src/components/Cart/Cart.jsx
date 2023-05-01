import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../context/Cart-Context";
import { Restaurant_img } from "./../../environment";
import { IconSquareRoundedFilled } from "@tabler/icons-react";
import "./Cart.css";
import CartItem from "./CartItem";

function Cart() {
  const cartCtx = useContext(CartContext);
  const cartItem = cartCtx.items;

  useEffect(() => {
    console.log(cartItem);
  }, [cartItem]);

  return (
    <div className="cart-detail-wrapper">
      <div className="cart-detail">
        {cartItem?.map((item) => {
          return (
            <div className="foodMenu-Wrapper" key={item.card.info.id}>
              {/* show red and green icon according to the vegClassifier */}
              {/* <div className="show-icon">
                <p className="">
                  {item.card.info.itemAttribute.vegClassifier === "NONVEG" ? (
                    <IconSquareRoundedFilled size={20} className="nonVeg" />
                  ) : (
                    <IconSquareRoundedFilled size={20} className="veg" />
                  )}
                </p>
              </div> */}

              {/* <div className="cart-item">
                <h4>{item.card.info.name}</h4>

                <span className="price">₹ {item.card.info.price / 100}</span>
              </div> */}
              <CartItem
                key={item.card.info.id}
                name={item.card.info.name}
                price={item.card.info.price / 100}
                id={item.card.info.id}
                vegClassifier={item.card.info.itemAttribute.vegClassifier}
              />
            </div>
          );
        })}
        <div className="total-amount-wrapper">
          <h2> TO PAY :</h2>
          <p className="total-amount">
            ₹
            {cartCtx.items.reduce(
              (sum, item) => (sum += item.card.info.price / 100),
              0
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
