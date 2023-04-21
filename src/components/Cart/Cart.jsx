import React, { useContext } from "react";
import CartContext from "../../context/Cart-Context";
import { Restaurant_img } from "./../../environment";
import { IconSquareRoundedFilled } from "@tabler/icons-react";
import "./Cart.css";

function Cart() {
  const cartCtx = useContext(CartContext);
  const cartItem = cartCtx.items;
  console.log(cartCtx.items);

  return (
    <div>
      {cartItem?.map((item) => {
        return (
          <div className="foodMenu-Wrapper" key={item.card.info.id}>
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
              <button
                className="btn-add"
                onClick={() => {
                  addToCart(item.card.info.id);
                }}
              >
                ADD
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
