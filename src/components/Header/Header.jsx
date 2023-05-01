import React, { useEffect, useState } from "react";
import logo from "./../../assets/Images/logo.webp";
import { ShoppingCart, Home, Help, Percentage } from "tabler-icons-react";
import { useContext } from "react";
import "./Header.css";
import CartContext from "../../context/Cart-Context";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
function Header() {
  const [cartNumber, setCartNumber] = useState([]);
  const cartCtx = useContext(CartContext);

  
  useEffect(() => {
    const numberOfCartItems = cartCtx.items.length;
    setCartNumber(numberOfCartItems);
  },[]);

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
                <Link>
                  <Home size={30} strokeWidth={2} color={"grey"}  />
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link>
                  <Percentage size={30} strokeWidth={2} color={"grey"} />
                  Offers
                </Link>
              </li>
              <li className="nav-item">
                <Link>
                  <Help size={30} strokeWidth={2} color={"grey"} />
                  Help
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/restaurant/cart"}>
                    <span className="cart">
                      <ShoppingCart size={30} strokeWidth={2} color={"grey"} />
                      <span className="cart-item-number">{cartNumber}</span>
                      Cart
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
