import { TbBookmark,TbShoppingBag } from "react-icons/tb";

import React from "react";
import "./index.css";

const Navbar = () => {
  return (
    <>
      <nav className="header-container">
      <h1 className="header-title">Furrl</h1>
        <div className="icon-container">
          <a href="https://furrl.in/wishlist" className="header-icon-link">
            <TbBookmark className="header-icon"/>
          </a>
          <a href="https://furrl.in/cart" className="header-icon-link">
            <TbShoppingBag className="header-icon"/>
          </a>
        </div>
      </nav>
      <div className="header-image-container">
        <img
          src="https://cdn.furrl.in/vibes/VibeCard_HomeHunts.jpg"
          alt="Home Hunts Vibe Card"
          className="header-image"
        />
      </div>
    </>
  );
};

export default Navbar;