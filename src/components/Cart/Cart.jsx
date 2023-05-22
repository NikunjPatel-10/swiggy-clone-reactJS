import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../context/Cart-Context";

import "./Cart.css";
import CartItem from "./CartItem";

function Cart() {
  const [cartItemPrice, setCartItemPrice] = useState();
  const cartCtx = useContext(CartContext);

  // get the selected item from resMenu using context
  const cartItem = cartCtx.items;
  console.log(cartCtx.totalAmount);

  /**
   * get price from the cartItem
   * @param {*} data
   */
  const cartItems = [];
  const priceHandler = (data) => {
    console.log(data);
    // setCartItemPrice(data);
    setCartItemPrice(cartItems.push(data));
    console.log(cartItemPrice);
  };

  return (
    <div className="cart-detail-wrapper">
      <div className="cart-detail">
        {cartItem?.map((item) => {
          return (
            <div>
              <CartItem
                key={item.card.info.id}
                name={item.card.info.name}
                price={item.card.info.price / 100}
                id={item.card.info.id}
                vegClassifier={item.card.info.itemAttribute.vegClassifier}
                onCartPrice={priceHandler}
              />
            </div>
          );
        })}
        <div className="total-amount-wrapper">
          <h2> TO PAY :</h2>
          <p className="total-amount">
            ₹
            {cartItemPrice.reduce(
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
