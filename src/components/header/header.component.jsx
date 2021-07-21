import React from "react";
import { Link } from "react-router-dom";
import { auth } from "./../../firbase/firebase.utils";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import CartIcon from "../cart-icon/cart-icon.component";

import "./header.style.scss";
import CartDropdown from "./../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, hidden }) => {
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
        <CartIcon />
      </nav>
      {hidden ? null : <CartDropdown />}
    </header>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => {
  return { currentUser, hidden };
};

export default connect(mapStateToProps)(Header);
