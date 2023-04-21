import React, { useEffect, useState } from "react";
import logo from "./../../assets/Images/logo.webp";
import { ShoppingCart, Home, Help, Percentage } from "tabler-icons-react";
import { useContext } from "react";
import "./Header.css";
import CartContext from "../../context/Cart-Context";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
function Header() {
  const [cartNumber, setCartNumber] = useState();
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.length;

  useEffect(() => {
    setCartNumber(numberOfCartItems);
  }, [numberOfCartItems]);

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
              <li className="nav-item">
                <Home size={25} strokeWidth={2} color={"black"} />
                Home
              </li>
              <li className="nav-item">
                <Percentage size={25} strokeWidth={2} color={"black"} />
                Offers
              </li>
              <li className="nav-item">
                <Help size={25} strokeWidth={2} color={"black"} />
                Help
              </li>
              <li className="nav-item">
                <Link to={"/restaurant/cart"}>
                  <span>
                    <ShoppingCart size={25} strokeWidth={2} color={"black"} />
                    {cartNumber}Cart
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
