import React, { useEffect, useState } from "react";
import logo from "./../../assets/Images/logo.webp";
import { ShoppingCart, Home, Help, Percentage } from "tabler-icons-react";
import { useContext } from "react";
import "./Header.css";
import CartContext from "../../context/Cart-Context";
import { Link } from "react-router-dom";
function Header() {
  const [cartNumber, setCartNumber] = useState([]);
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    cartItem();
  }, []);

  let numberOfCartItems = cartCtx.items.length;
  const cartItem = () => {
    setCartNumber(numberOfCartItems);
  };
  return (
    <>
      <header className="header">
        <div className="header-wrapper">
          <div>
            <figure className="image-wrapper">
              <img src={logo} />
            </figure>
          </div>

          <nav className="navbar">
            <ul className="navbar-nav">
              <Link to={"/home"}>
                <li className="nav-item">
                  <Home size={22} />
                  <span className="nav-link"> Home</span>
                </li>
              </Link>
              <li className="nav-item">
                <Percentage size={22} />
                <span className="nav-link"> Offers</span>
              </li>
              <li className="nav-item">
                <Help size={22} />
                <span className="nav-link"> Help</span>
              </li>
              <li className="nav-item">
                <Link to={"/restaurant/cart"}>
                  <span className="cart">
                    <ShoppingCart size={22} />
                    <span className="cart-item-number">{cartNumber}</span>
                    <span className="nav-link">Cart</span>
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
