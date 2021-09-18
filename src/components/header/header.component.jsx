import React from "react";
import { Link } from "react-router-dom";
import { auth } from "./../../firbase/firebase.utils";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/car.selectors";
import { selectCurrentUser } from "./../../redux/user/user.selectors";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "./../cart-dropdown/cart-dropdown.component";

import "./header.style.scss";
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from "./header.styles";

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/" style={{ width: "50px", height: "39px" }}>
        <Logo />
      </LogoContainer>

      <OptionsContainer>
        <OptionLink to="/shop">shop</OptionLink>
        <OptionLink to="/contact">contact</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            sign out
          </OptionLink>
        ) : (
          <OptionLink to="/sign-in">sign in</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
