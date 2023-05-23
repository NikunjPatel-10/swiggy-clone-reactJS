import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../context/Cart-Context";

import "./Cart.css";
import CartItem from "./CartItem";

function Cart() {
  const [cartItemPrice, setCartItemPrice] = useState([]); // Provide an initial value for cartItemPrice
  const cartCtx = useContext(CartContext);

  // get the selected items from cartCtx using context
  const cartItems = cartCtx.items;

  /**
   * get price from the cartItem
   * @param {*} data
   */
  const priceHandler = (data) => {
    console.log(data.Price);
    setCartItemPrice(data.Price);
    // console.log(car);
  };

  return (
    <div className="cart-detail-wrapper">
      <div className="cart-detail">
        {cartItems?.map((item) => (
          <div key={item.card.info.id}>
            <CartItem
              name={item.card.info.name}
              price={item.card.info.price / 100}
              id={item.card.info.id}
              vegClassifier={item.card.info.itemAttribute.vegClassifier}
              onCartPrice={priceHandler}
            />
          </div>
        ))}
        <div className="total-amount-wrapper">
          <h2>TO PAY:</h2>
          <p className="total-amount">
            ₹
            {cartItems.reduce(
              (total, item) => total + item.card.info.price / 100,
              0
            ) +
              (cartItemPrice | 0)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
