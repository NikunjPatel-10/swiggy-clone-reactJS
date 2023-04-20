import React from "react";
import logo from "./../../assets/Images/logo.webp";
import { ShoppingCart, Home, Help, Percentage } from "tabler-icons-react";
import "./Header.css";
function Header() {
  return (
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
              <ShoppingCart size={25} strokeWidth={2} color={"black"} />
              Cart
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
