import "./CartItem.css";
import React, { useState, useContext } from "react";
import CartContext from "../../context/Cart-Context";
import { IconSquareRoundedFilled } from "@tabler/icons-react";

function CartItem({ name, price, id, vegClassifier }) {
  const cartCtx = useContext(CartContext);
  //   const cartItemprice = cartCtx.items.map((item) => item.card.info.price / 100);
  const [state, setState] = useState({
    counter: 1,
    Price: price,
  });

  const removeHandler = () => {
    // if (cartCtx.items.find((item) => item.card.info.id === id)) {
    setState({
      counter: state.counter - 1,
      Price: state.counter > 1 ? state.Price - price : price,
    });
    // }
  };

  const addHandler = () => {
    // if (cartCtx.items.find((item) => item.card.info.id === id)) {
    setState({
      counter: state.counter + 1,
      Price: price * (state.counter * 1),
    });
    // }
  };
  return (
    <div className="foodMenu-Wrapper">
      <div className="show-icon">
        <p className="">
          {vegClassifier === "NONVEG" ? (
            <IconSquareRoundedFilled size={20} className="nonVeg" />
          ) : (
            <IconSquareRoundedFilled size={20} className="veg" />
          )}
        </p>
      </div>
      <div className="cart-item">
        <h4>{name}</h4>

        <span className="price">₹ {state.Price}</span>
      </div>
      <div className="actions">
        <button
          onClick={() => {
            removeHandler();
          }}
        >
          −
        </button>
        <span className="quantity">{state.counter}</span>
        <button
          onClick={() => {
            addHandler();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default CartItem;
