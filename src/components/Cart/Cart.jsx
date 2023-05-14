import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../context/Cart-Context";

import "./Cart.css";
import CartItem from "./CartItem";

function Cart() {
  const [cartItemPrice, setCartItemPrice] = useState();
  const cartCtx = useContext(CartContext);

  // get the selected item from resMenu using context
  const cartItem = cartCtx.items;
  let amount =` $${cartCtx.totalAmount.toFixed(2)}`
  console.log(amount);

  // const cartItemAddHandler = (item)=>{
  //   cartCtx.addItem(item)
  // }

  // const cartItemRemoveHandler = (id)=>{
  //   cartCtx.removeItem(id)
  // }

  /**
   * get price from the cartItem
   * @param {*} data
   */
  const priceHandler = (data) => {
    setCartItemPrice(data);
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
                // onAdd={()=>{cartItemAddHandler(item)}}
                // onRemove={()=>{cartItemRemoveHandler(item.card.info.id)}}
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
            ) +
              (cartItemPrice | 0)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
