import React, { useContext } from "react";
import CartContext from "../../context/Cart-Context";
import { Restaurant_img } from "./../../environment";
import { IconSquareRoundedFilled } from "@tabler/icons-react";
import "./Cart.css";

function Cart() {
  const cartCtx = useContext(CartContext);
  const cartItem = cartCtx.items;
  console.log(cartCtx.items);

  const removeHandler = (id) => {
    cartCtx.removeItem(id);
    console.log('remove', -1);
  };

  const addHandler = (item) => {
    cartCtx.addItem(item);
  };

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
              {/* <figure className="foodImgWrapper">
                <img src={Restaurant_img + item.card.info.imageId} />{" "}
              </figure> */}
              <div className="cart-item">
                <h2>{item.card.info.name}</h2>
                
                  <span className="price">₹ {item.card.info.price / 100}</span>
                  {/* <span className= "amount">x {props.amount}</span> */}
                
              </div>
              <div className="actions">
                <button onClick={removeHandler.bind(null,item.id)}>−</button>
                <span className="quantity" >
                  {cartCtx.updatedItems}
                </span>
                <button onClick={addHandler.bind(null,item)}>+</button>
              </div>
            </div>
          );
        })}
      </div>
      <div>{cartCtx.totalAmount}</div>
    </div>
  );
}

export default Cart;
