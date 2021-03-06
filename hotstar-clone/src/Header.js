import React, { Component } from "react";
import "./Header.css";
//import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";

function Header() {
  return (
    <div className="header">
      {/* <Link to="/"> */}
      <img
        className="header__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Disney%2B_Hotstar_logo.svg/1200px-Disney%2B_Hotstar_logo.svg.png"
      />
      {/* </Link> */}

      <div className="header__search">
        <ViewHeadlineIcon className="header__ViewHeadlineIconn" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">TV</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Movies</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Sports</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">News</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Premium</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Disney+</span>
          <span className="header__optionLineTwo">NEW</span>
        </div>

        <div className="header__option">
          <span className="header__optionKids">KiDs</span>
        </div>

        <div className="header__option">
          <span className="header__optionSearch">Search</span>
        </div>

        <div className="header__option">
          <span className="header__button">
            <button>Subscribe</button>
          </span>
        </div>

        <Link to="/login">
          <div className="header__option">
            <span className="header__optionLineOne">LOGIN</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
