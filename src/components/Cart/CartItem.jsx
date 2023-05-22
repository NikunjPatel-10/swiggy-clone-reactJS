import "./CartItem.css";
import React, { useState, useContext } from "react";
import CartContext from "../../context/Cart-Context";
import { IconSquareRoundedFilled } from "@tabler/icons-react";

function CartItem({ name, price, vegClassifier, onCartPrice, id, quantity }) {
  const [state, setState] = useState({
    counter: 1,
    Price: price,
  });

  // let itemPrice = 0;
  const cartCtx = useContext(CartContext);
  const item = cartCtx.items.map((data) => data.card.info.id);
  /**
   * display the price and counter in cart
   */
  const removeHandler = () => {
    console.log("remove");
    // if (cartCtx.items.find((item) => item.card.info.id === id)) {
    setState((prevState) => {
      const updatedCounter = prevState.counter - 1;
      const updatedPrice = updatedCounter > 0 ? prevState.Price - price : price;

      return {
        counter: updatedCounter,
        Price: updatedPrice,
      };
    });
    onCartPrice(state.Price);
  };

  // const [cart, setCart] = useState([]);
  const addHandler = () => {
    setState((prevState) => {
      const updatedCounter = prevState.counter + 1;
      const updatedPrice = price * updatedCounter;

      return {
        counter: updatedCounter,
        Price: updatedPrice,
      };
    });
    onCartPrice(state.Price);
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
          <button onClick={removeHandler}>−</button>
          <span className="quantity">{state.counter}</span>
          <button onClick={addHandler}>+</button>
        </div>
      </div>
    </>
  );
}

export default CartItem;
