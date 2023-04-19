import React from "react";
import logo from "./../../assets/Images/logo.webp";
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
            <li className="nav-item">Home</li>
            <li className="nav-item">Restaurant</li>
            <li className="nav-item">Help</li>
            <li className="nav-item">Cart</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
