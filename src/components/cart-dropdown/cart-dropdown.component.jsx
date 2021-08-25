import React from "react";

import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/car.selectors";

import { withRouter } from "react-router";

import { createStructuredSelector } from "reselect";

import CartItem from "./../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.style.scss";
import { toggleCartHidden } from "./../../redux/cart/cart.action";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          dispatch(toggleCartHidden());
          history.push("/checkout");
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
