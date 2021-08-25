import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/car.selectors";
import { selectCartTotal } from "./../../redux/cart/car.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, cartTotal }) => {
  return (
    <div className="checkout-page">
      <ul className="checkout-header">
        <li className="header-block">
          <p>Product</p>
        </li>
        <li className="header-block">
          <p>Description</p>
        </li>
        <li className="header-block">
          <p>Quantity</p>
        </li>
        <li className="header-block">
          <p>Price</p>
        </li>
        <li className="header-block">
          <p>Remove</p>
        </li>
      </ul>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${cartTotal}</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
