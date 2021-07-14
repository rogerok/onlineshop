import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { auth } from "./../../firbase/firebase.utils";

import "./header.style.scss";

const Header = ({ currentUser }) => {
  return (
    <header className="header">
      <Link
        className="logo-container"
        to="/"
        style={{ width: "50px", height: "39px" }}
      >
        <Logo />
      </Link>

      <nav className="options">
        <Link className="option" to="/shop">
          shop
        </Link>
        <Link className="option" to="/contact">
          contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            sign out
          </div>
        ) : (
          <Link className="option" to="/sign-in">
            sign in
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
