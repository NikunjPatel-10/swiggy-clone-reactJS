import "./CartItem.css";
import React, { useState, useContext } from "react";
import CartContext from "../../context/Cart-Context";
import { IconSquareRoundedFilled } from "@tabler/icons-react";

function CartItem({ name, price, vegClassifier, onCartPrice }) {
  const [state, setState] = useState({
    counter: 1,
    Price: price,
  });

  /**
   * display the price and counter in cart
   */
  const removeHandler = () => {
    console.log("remove");
    debugger;
    // if (cartCtx.items.find((item) => item.card.info.id === id)) {
    setState({
      counter: state.counter - 1,
      Price: state.counter > 1 ? state.Price - price : price,
    });
    onCartPrice(state.Price);

    // const data = cartCtx.items.findIndex((item) => item.card.info);
    // if (state.counter <= 2) {
    //   cartCtx.items.splice(data, 1);
    // }

    // }
  };

  const addHandler = () => {
    console.log("add");

    setState({
      counter: state.counter + 1,
      Price: price * state.counter,
    });
    onCartPrice(state.Price);
    // }
  };
  return (
    <>
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
    </>
  );
}

export default CartItem;
